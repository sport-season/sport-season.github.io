import React, { useEffect, useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import * as L from 'leaflet';
import polyline from '@mapbox/polyline';
import localDB from '../../services/indexedDBService';
import { getActivitiesAsync } from '../../services/activitiesService';
import ActivityItem from './components/ActivityItem';
import { formatDistance } from '../../helpers/formatHelper';
import { clearMap } from '../../helpers/mapHelper';
import Card from './components/Card';
import styles from './styles.module.css'
import { UserContext } from '../../contexts/userContext';
import Chart from "../Chart";
import {debounceAsync} from "../../helpers/debounceHelper";
import Widget from "./components/Widget";
import Modal from "../Modal";
const now = new Date();
const defaultD1 = new Date(now.getFullYear(), 0, 1, 4, 0, 0, 1);
const defaultD2 = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

const Activities = ({ token }) => {
    const [d1, setD1] = useState(localStorage.getItem('stravastatD1') || defaultD1.toISOString().substr(0,10));
    const [d2, setD2] = useState(localStorage.getItem('stravastatD2') || defaultD2.toISOString().substr(0,10));
    const [types, setTypes] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [type, setType] = useState(localStorage.getItem('stravastatType') || "");
    const [activities, setActivities] = useState(null);
    const mapRef = useRef();
    const mapContainerRef = useRef();
    const user = useContext(UserContext);

    useEffect(() => {
        localDB.getAllActivity().then(res => {
            setActivities(res);
            if (!res.length) {
                handleUpdate();
            }
        });
    }, []);

    useEffect(async () => localStorage.setItem('stravastatD1', d1), [d1]);
    useEffect(async () => localStorage.setItem('stravastatD2', d2), [d2]);
    useEffect(() => localStorage.setItem('stravastatType', type), [type])

    useEffect(() => {
        activities?.length && setTypes(activities.reduce((acc, {type}) => ({...acc, [type]: (acc[type] || 0) + 1}), {}));
    }, [activities]);

    useEffect(()=> {
        if (!mapContainerRef?.current) {
            return;
        }

        if (!mapRef?.current) {
            mapRef.current = L.map(
                mapContainerRef.current,
                { fullscreenControl: true }
            ).setView([53.2006600, 45.0046400], 12);

            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                maxZoom: 20,
                id: 'osm'
            }).addTo(mapRef.current);
        }



        const boundCoordinates = [];

        clearMap(mapRef.current);
        const filtredActivities = activities && activities.filter(x => {
            const dX = Date.parse(x.start_date_local);
            const dS = Date.parse(d1);
            const dE = Date.parse(d2);

            return (!type || x.type === type) && dX >= dS && dX <= dE;
        });
        filtredActivities?.forEach(({ map: {summary_polyline} }) => {
            if (summary_polyline?.length) {
                const coords = polyline.decode(summary_polyline);
                L.polyline(coords).setStyle({
                    color: 'rgba(255, 0, 0,0.5)'
                }).addTo(mapRef.current)
                boundCoordinates.push(coords)
            }
        })

        const bounds = L.latLngBounds(boundCoordinates);
        boundCoordinates?.length && mapRef.current.fitBounds(bounds);// works!

    }, [mapContainerRef.current, activities, type, d1, d2]);


    const filtredActivities = activities && activities.filter(x => {
        const dX = Date.parse(x.start_date_local);
        const dS = Date.parse(d1);
        const dE = Date.parse(d2);

        return (!type || x.type === type) && dX >= dS && dX <= dE;
    })
    const aggreg = filtredActivities?.reduce((acc, val) => {
        return {
            distance: acc.distance + val.distance,
            elev_high: acc.elev_high + val.elev_high || 0,
            elev_low: acc.elev_low + val.elev_low || 0,
            elapsed_time: acc.elapsed_time + val.elapsed_time,
            moving_time: acc.moving_time + val.moving_time
        };
    }, { distance: 0, elev_high: 0, elev_low: 0, elapsed_time: 0, moving_time: 0 })

    let debounceTimer;
    const handleChangeD1 = async (e) => { const value = e.target.value; await debounceAsync(); setD1(value); }
    const handleChangeD2 = async (e) => { const value = e.target.value; await debounceAsync(); setD2(value); }
    const limit = 50;

    async function handleUpdate() {
        setIsLoading(true);
        let lastBatch = activities;
        let lastActivityDate = lastBatch?.length
            ? new Date(Date.parse(lastBatch[lastBatch.length - 1].start_date))
            : new Date(Date.parse(user.created_at));

        let page = 0;
        while (page === 0 || lastBatch?.length > 0) {
            page++;
            console.log('page', page);

            lastBatch = await getActivitiesAsync(
                token,
                Math.floor(lastActivityDate.getTime() / 1000),
                Math.floor(new Date().getTime() / 1000),
                page,
                limit
            );

            console.time('addDB');
            await localDB.addActivities(lastBatch).catch(e => console.error(e));
            console.timeEnd('addDB');
        }

        setIsLoading(false)
    };

    return <div>
        <button className={styles.floatButton} disabled={loading} onClick={handleUpdate}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path
                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                <path d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg>
        </button>
        <div className={styles.form}>
            <div className={styles.dates}><input
                type="date"
                value={d1}
                min={user.created_at.substr(0,10)}
                max={d2.substr(0,10)}
                onChange={handleChangeD1}
            />
            -
            <input
                type="date"
                value={d2}
                min={d1.substr(0,10)}
                max={new Date().toISOString().substr(0,10)}
                onChange={handleChangeD2}
            />
            </div>
            {' \u00a0 '}
            <select onChange={e => setType(e.target.value)} value={type}>
                <option value="">Все виды активностей</option>
                {types && Object.entries(types).map(([x,v]) => (
                    <option key={x} value={x}>{x} ({v})</option>
                ))}
            </select>
        </div>
        {
            aggreg && <Widget
                distance={aggreg.distance}
                elev_high={aggreg.elev_high}
                elev_low={aggreg.elev_low}
                moving_time={aggreg.moving_time}
            />
        }
        {filtredActivities?.length > 0 && <Chart activities={filtredActivities} />}
        {!activities && 'loading...'}
        {filtredActivities && <div ref={mapContainerRef} style={{height:'300px'}}/>}
        <section>
            {filtredActivities && filtredActivities.map(x => <ActivityItem key={x.id} activity={x} /> )}
        </section>
    </div>;
};

Activities.propTypes = {
    token: PropTypes.string,
};

export default Activities;
