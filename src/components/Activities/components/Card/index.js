import React from 'react';
import styles from './styles.module.css';

const Card = ({title, children, unit}) => {
    return <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardContent}>{children}{unit && <>&thinsp;<small>{unit}</small></>}</div>
    </div>;
};

export default Card;
