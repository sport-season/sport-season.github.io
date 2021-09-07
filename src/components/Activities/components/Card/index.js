import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Card = ({title, children, unit}) => {
    return <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardContent}>{children}{unit && <>&thinsp;<small>{unit}</small></>}</div>
    </div>;
};

Card.propTypes = {};

export default Card;
