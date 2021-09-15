import { formatDistance } from '../../helpers/formatHelper';
import polyline from '@mapbox/polyline';
import { downloadLatLonAsGpx, getGPXFileAsync } from '../../helpers/gpxHelper';

export const getPopupContentForActivity = activity => {

    const { map: {summary_polyline} } = activity;

    const div = document.createElement('div');
    div.innerText = `${new Date(Date.parse(activity.start_date_local) - (activity.utc_offset * 1000)).toLocaleString()}
                    ${activity.name} (${formatDistance(activity.distance)})`;

    const footer = document.createElement('footer');
    footer.style.marginTop = '12px';

    if (summary_polyline?.length) {
        const btn = document.createElement('button');
        btn.innerText = '⇩ GPX';
        btn.style.marginRight = '10px'
        btn.onclick = () => {
            const latLon = polyline.decode(summary_polyline);
            downloadLatLonAsGpx(latLon, `${activity.name} ${formatDistance(activity.distance)}`)
        }

        footer.appendChild(btn)


        if (window.navigator.canShare) {
            const btn = document.createElement('button');
            btn.innerText = 'Share';
            btn.style.marginRight = '10px'
            btn.onclick = () => {
                const latLon = polyline.decode(summary_polyline);
                getGPXFileAsync(latLon, `${activity.name} ${formatDistance(activity.distance)}`)
                    .then(file => {
                        const filesArray = [file];
                        const shareData = { files: filesArray };
                        if (navigator.canShare && navigator.canShare(shareData)) {

                            /* Добавляем заголовок после того, как navigator.canShare принимает файлы */
                            shareData.title = `${activity.name} ${formatDistance(activity.distance)}`

                            console.log(shareData)
                            navigator.share(shareData)
                                .then(() => console.log('Share was successful.'))
                                .catch((error) => console.log('Sharing failed', error));

                        } else {
                            console.log("Your system doesn't support sharing files.");
                        }
                    })
            }

            footer.appendChild(btn)
        }
    }

    const a = document.createElement('a');
    a.href = `https://www.strava.com/activities/${activity.id}`;
    a.rel="noreferrer";
    a._target="_blank";
    a.innerText = 'Открыть в Strava';

    footer.appendChild(a);
    div.appendChild(footer);


    return div
}
