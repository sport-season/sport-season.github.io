import React from 'react';
import PropTypes from 'prop-types';
import { act } from '@testing-library/react';
import { formatDistance } from '../../../../helpers/formatHelper';

const ActivityItem = ({ activity }) => {

    const t1 = Date.parse(activity.start_date_local) - (activity.utc_offset * 1000)
    const d1 = new Date(t1);
    const d2 = new Date(t1 + (activity.elapsed_time * 1000));
    const at = new Date((activity.moving_time - activity.utc_offset ) * 1000);

    return <div>
        <a href={`https://www.strava.com/activities/${activity.id}`} target={'_blank'}>{activity.name}</a>
        <strong>{formatDistance(activity.distance)}</strong>
        {d1.toLocaleString().substr(0,17)}
        -
        {d1.toLocaleDateString() !== d2.toLocaleDateString() && d2.toLocaleDateString()}
        {d2.toLocaleTimeString().substr(0,5)}
        (движ: {at.toLocaleTimeString().substr(0,5)})
        <br/>
        {activity.elev_high}/{activity.elev_low} {activity.average_heartrate}/{activity.max_heartrate} {activity.average_speed}/{activity.speed}
    </div>;
};

ActivityItem.propTypes = {
    activity: PropTypes.shape({
/*
* achievement_count: 0
athlete: {id: 12602406, resource_state: 1}
athlete_count: 2
average_cadence: 46.2
average_heartrate: 109.6
average_speed: 1.15
comment_count: 0
commute: false
display_hide_heartrate_option: true
distance: 15153.2
elapsed_time: 19210
elev_high: 268.6
elev_low: 171.1
end_latlng: (2) [53.22, 44.91]
external_id: "b1046a83-5025-48bc-81a6-ff2ed5ebf35b-activity.fit"
flagged: false
from_accepted_tag: false
gear_id: "g6417986"
has_heartrate: true
has_kudoed: false
heartrate_opt_out: false
id: 5872168321
kudos_count: 7
location_city: null
location_country: "Russia"
location_state: null
manual: false
map: {id: "a5872168321", summary_polyline: "gfzcIyicqGSNJQE_AHAMGDI_@wAEeBN}@\\u@KyAjAO@]LM?eCJ…BLu@Km@EoIOq@GeBi@YM}@KMmAV]ZMKGe@a@i@EeAJQlANEh@", resource_state: 2}
max_heartrate: 148
max_speed: 4
moving_time: 13179
name: "Полуденная ходьба"
photo_count: 0
pr_count: 0
private: false
resource_state: 2
start_date: "2021-08-29T08:14:02Z"
start_date_local: "2021-08-29T11:14:02Z"
start_latitude: 53.22
start_latlng: (2) [53.22, 44.91]
start_longitude: 44.91
timezone: "(GMT+03:00) Europe/Moscow"
total_elevation_gain: 189.2
total_photo_count: 16
trainer: false
type: "Walk"
upload_id: 6243513574
upload_id_str: "6243513574"
utc_offset: 10800
visibility: "everyone"

* */
    }).isRequired,
};

export default ActivityItem;
