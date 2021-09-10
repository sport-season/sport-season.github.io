import Card from "../Card";
import {formatDistance} from "../../../../helpers/formatHelper";
import styles from './style.module.css';

const Widget = ({ distance, elev_high, elev_low, moving_time }) => {
    const [d, dU] = formatDistance(distance, true);
    const [h, hU] = formatDistance(elev_high, true);
    const [l, lU] = formatDistance(elev_low, true);

    return <section className={styles.widgetContainer}>
        <Card title={'Дистанция'} unit={dU}>{d}</Card>
        <Card title={'Набор'} unit={hU}>{h}</Card>
        <Card title={'Сброс'} unit={lU}>{l}</Card>
        <Card title={'В движении'} unit="ч">{(moving_time / 60 / 60).toFixed(2)}</Card>
    </section>
}

export default Widget;
