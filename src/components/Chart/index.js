import styles from './styles.module.css';
import React, {useEffect, useState} from "react";
import {debounceAsync} from "../../helpers/debounceHelper";
import {showModal} from "../Modal";
import ActivityItem from "../Activities/components/ActivityItem";

const showDay = (x) => {
    // window.confirm([formatDistance(x.dist), ...x.acts.map(x => '• ' + x.name)].join('\n'))
    showModal({children: <div>
            {x.acts.map(a => <ActivityItem key={a.id} activity={a} />)}
        </div>})
}

const defaultZoom = 16;

const Chart = ({activities}) => {
    const [size, setSize] = useState(+localStorage.getItem('stravastatZoom') || defaultZoom);


    useEffect(async () => localStorage.setItem('stravastatZoom', size), [size]);


    if(!activities[0]) {
        return '🐱‍🚀';
    }

    const minD = new Date(Date.parse(activities[0].start_date));
    const maxD = new Date(Date.parse(activities[activities.length - 1].start_date)+86400000);
    const shif = minD.getDay() === 0 ? 6 : minD.getDay()-1

    const agg = [];
    const mo = [];
    let cur = minD.getTime();
    let w=0;
    while (cur < maxD.getTime()) {
        const actual = activities.filter(x => {
            return new Date(Date.parse(x.start_date)).toISOString().substr(0,10) === new Date(cur).toISOString().substr(0,10)
        });

        if (new Date(cur).getDay() === 6) {
            w += 1;
        }

        if (new Date(cur).getMonth() !== new Date(cur+86_400_000).getMonth()) {
            mo.push({ m: new Date(cur).toISOString().substr(0,7), w })
            w = 0;
        }
        agg.push({ date: cur, cou: actual.length, acts: actual, dist: actual.reduce((s,x)=>x.distance + s,0) });

        cur += 86_400_000;
    }
    mo.push({ m: new Date(cur).toISOString().substr(0,7),w})
    w = 0;

    const filledActivities = agg.filter(x => x.dist > 0);

    if (!filledActivities?.length) {
        return null;
    }

    const max = filledActivities.reduce((prev, curr) => prev.dist > curr.dist ? prev.dist : curr.dist);

    const handleZoom = coeff => async () => {
        await debounceAsync(100);
        setSize(cur => cur + coeff)
    }


    return <section  className={styles.chartSection}>
        <header className={styles.chartSectionHeader}>
            <h3>Карта активности</h3>
            <div>
                {size > defaultZoom && <button onClick={handleZoom(-2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-zoom-out" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        <path
                            d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                        <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>}
                <button onClick={handleZoom(2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-zoom-in" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        <path
                            d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                        <path fill-rule="evenodd"
                              d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </button>
            </div>
        </header>
        <div className={styles.chart} style={{ fontSize: size + 'px' }}>
        <div className={styles.daysName}>
            <div><small>пн</small></div>
            <div><small>вт</small></div>
            <div><small>ср</small></div>
            <div><small>чт</small></div>
            <div><small>пт</small></div>
            <div><small>сб</small></div>
            <div><small>вс</small></div>
        </div>
        <div className={styles.main}>
            <div className={styles.monthsBar}>
                {mo.map(m => <div key={m.m} className={styles.month + ' '+styles['m'+m.w]}>
                <small>{m.m}</small>
            </div>)}</div>
            <div className={styles.container}>
                {shif> 0 && new Array(shif).fill(true).map((a,x) => <div key={x} className={styles.empty_point} />)}
                {agg.map((x, i) => {
                    return <div
                        title={new Date(x.date)} className={x.cou>0 ? styles.point:styles.empty_point}
                        key={x.date}
                        style={x.dist > 0 ? {backgroundColor:`rgba(252,82,0,${(x.dist / max)})`}:{}}
                        onClick={x.dist > 0 ? () => showDay(x) : () => {} }
                    >
                        <small>
                            {new Date(x.date).getDate()}
                        </small>
                    </div>
                })}
            </div>
        </div>
    </div></section>
}

/*
* achievement_count: 0
athlete: {id: 12602406, resource_state: 1}
athlete_count: 8
average_speed: 1.164
comment_count: 0
commute: false
display_hide_heartrate_option: false
distance: 13919.9
elapsed_time: 22384
elev_high: 344
elev_low: 232.4
end_latlng: (2) [53.03, 46.98]
external_id: "???? 3.gpx"
flagged: false
from_accepted_tag: false
gear_id: "g3242449"
has_heartrate: false
has_kudoed: false
heartrate_opt_out: false
id: 1948748704
kudos_count: 4
location_city: null
location_country: "Russia"
location_state: null
manual: false
map: {id: "a1948748704", summary_polyline: "apibI}y_}GlATS{Ai@fIiB}Du@|@qAqNiIuEsBuDkFaAcBqDoD…qDU}JnBypAaC_I`Cw`@qJDNyEcC}@gE|BkAuLnCa@}MgAoEsM", resource_state: 2}
max_speed: 2.1
moving_time: 11963
name: "Ноябрррьский поход 2018. День 3"
photo_count: 0
pr_count: 0
private: false
resource_state: 2
start_date: "2018-11-04T06:58:34Z"
start_date_local: "2018-11-04T09:58:34Z"
start_latitude: 52.97
start_latlng: (2) [52.97, 46.86]
start_longitude: 46.98
timezone: "(GMT+03:00) Europe/Moscow"
total_elevation_gain: 201.4
total_photo_count: 4
trainer: false
type: "Hike"
upload_id: 2084826025
upload_id_str: "2084826025"
utc_offset: 10800
visibility: "everyone"

* */

export default Chart;
