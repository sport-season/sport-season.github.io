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

const getMonthName = date => {
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return `${months[date.getMonth()].toUpperCase()}'${date.getFullYear().toString().substr(-2)}`;
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
            mo.push({ m: getMonthName(new Date(cur)), w })
            w = 0;
        }
        agg.push({ date: cur, cou: actual.length, acts: actual, dist: actual.reduce((s,x)=>x.distance + s,0) });

        cur += 86_400_000;
    }
    mo.push({ m: getMonthName(new Date(cur)),w})
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
                        <path fillRule="evenodd"
                              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        <path
                            d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                        <path fillRule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>}
                <button onClick={handleZoom(2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-zoom-in" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        <path
                            d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                        <path fillRule="evenodd"
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
    </div>
    </section>
}

export default Chart;
