import styles from './styles.module.css';

const Chart = ({activities}) => {
    if(!activities[0]) {
        return '🐱‍🚀';
    }

    const minD = new Date(Date.parse(activities[0].start_date));
    const maxD = new Date(Date.parse(activities[activities.length - 1].start_date));
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
            mo.push({ m: new Date(cur).toISOString().substr(0,7),w})
            w = 0;
        }
        agg.push({ date: cur, cou: actual.length, dist: actual.reduce((s,x)=>x.distance + s,0) });

        cur += 86_400_000;
    }
    mo.push({ m: new Date(cur).toISOString().substr(0,7),w})
    w = 0;



    return <div className={styles.chart}>
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
            {mo.map(m => <div key={m.m} className={styles.month + ' '+styles['m'+m.w]}>
                <small>{m.m}</small>
            </div>)}
            <div className={styles.container}>
                {shif> 0 && new Array(shif).fill(true).map((a,x) => <div key={x} className={styles.empty_point} />)}
                {agg.map((x, i) => {
                    return <div title={new Date(x.date)} className={x.cou>0 ? styles.point:styles.empty_point} key={x.date} />
                })}
            </div>
        </div>
    </div>
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