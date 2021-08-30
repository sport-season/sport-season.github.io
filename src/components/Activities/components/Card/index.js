import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const Card = ({title, children}) => {
    return <div className={styles.card}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardContent}>{children}</div>
    </div>;
};

Card.propTypes = {};

export default Card;
