import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as L from 'leaflet';
import polyline from '@mapbox/polyline';
import { getActivitiesAsync } from '../../services/activitiesService';
import ActivityItem from './components/ActivityItem';
import { formatDistance } from '../../helpers/formatHelper';
const now = new Date();
const defaultD1 = new Date(now.getFullYear(), 0, 1, 4, 0, 0, 1);
const defaultD2 = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

const Activities = ({ token }) => {
    const [d1, setD1] = useState(defaultD1.toISOString().substr(0,10));
    const [d2, setD2] = useState(defaultD2.toISOString().substr(0,10));
    const [types, setTypes] = useState([]);
    const [type, setType] = useState();
    const [activities, setActivities] = useState(null);
    const mapRef = useRef();
    const mapContainerRef = useRef();

    useEffect(() => {
        setActivities(null);

        getActivitiesAsync(token, Math.floor(Date.parse(d1) / 1000), Math.floor(Date.parse(d2) / 1000))
            .then(res => {
                setActivities(res);
                setTypes(res.reduce((acc, {type}) => ({...acc, [type]: (acc[type] || 0) + 1}), {}));
                console.log(res)
            })
    }, [d1, d2, token]);


    useEffect(()=> {
        if (!mapContainerRef?.current || mapRef?.current) {
            return;
        }
        mapRef.current = L.map(
            mapContainerRef.current,
            { fullscreenControl: true }
        ).setView([53.2006600, 45.0046400], 12);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 20,
            id: 'osm'
        }).addTo(mapRef.current);


        const boundCoordinates = [];


        activities.forEach(({ map: {summary_polyline} }) => {
            if (summary_polyline?.length) {
                const coords = polyline.decode(summary_polyline);
                L.polyline(coords).setStyle({
                    color: 'rgba(255, 255, 255,0.5)'
                }).addTo(mapRef.current)
                boundCoordinates.push(coords)
            }
        })

        const bounds = L.latLngBounds(boundCoordinates);
        boundCoordinates?.length && mapRef.current.fitBounds(bounds);// works!

    }, [mapContainerRef.current, activities]);


    const aggreg = activities && activities.filter(x => !type || x.type === type).reduce((acc, val) => {
        return {
            distance: acc.distance + val.distance,
            elev_high: acc.elev_high + val.elev_high || 0,
            elev_low: acc.elev_low + val.elev_low || 0,
            elapsed_time: acc.elapsed_time + val.elapsed_time,
            moving_time: acc.moving_time + val.moving_time
        };
    }, { distance: 0, elev_high: 0, elev_low: 0, elapsed_time: 0, moving_time: 0 })

    return <div>
        <input type="date" value={d1} onChange={(e) => setD1(e.target.value)}/>-
        <input type="date" value={d2} max={defaultD2.toISOString().substr(0,10)} onChange={(e) => setD2(e.target.value)}/>
        <select onChange={e => setType(e.target.value)} value={type}>
            <option value="">Все виды активностей</option>
            {types && Object.entries(types).map(([x,v]) => (
                <option key={x} value={x}>{x} ({v})</option>
            ))}
        </select>
        <hr />
        {aggreg && <h3>{formatDistance(aggreg.distance)}, ⭧{formatDistance(aggreg.elev_high)}, ⭨{formatDistance(aggreg.elev_low)}, {(aggreg.moving_time / 60 / 60).toFixed(2)} ч.ы</h3>}
        <hr />
        {!activities && 'loading...'}
        {activities && <div ref={mapContainerRef} style={{height:'300px'}}/>}
        <ul>
            {activities && activities.filter(x => !type || x.type === type).map(x => <ActivityItem key={x.id} activity={x} /> )}
        </ul>
    </div>;
};

Activities.propTypes = {
    token: PropTypes.string,
};

export default Activities;
