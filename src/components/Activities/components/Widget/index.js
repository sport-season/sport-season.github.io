import Card from "../Card";
import {formatDistance} from "../../../../helpers/formatHelper";
import styles from './style.module.css';

const Widget = ({ distance, total_elevation_gain, average_speed, moving_time, count }) => {
    const [d, dU] = formatDistance(distance, true);
    const [h, hU] = formatDistance(total_elevation_gain, true);

    return <section className={styles.widgetContainer}>
        <Card title={'Дистанция'} unit={dU}>{d}</Card>
        <Card title={'Набор'} unit={hU}>{h}</Card>
        <Card title={'Ср.скор.'} unit={'км/ч'}>{Math.round((average_speed/count) * 3.6 )}</Card>
        <Card title={'В движении'} unit="ч">{(moving_time / 60 / 60).toFixed(2)}</Card>
    </section>
}

export default Widget;
