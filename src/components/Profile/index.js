import React from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../../services/authService';
import styles from './styles.module.css';

const Profile = (props) => {
    const user = getUser();
    return <div className={styles.prof}>
        <img src={user.profile_medium} className={styles.ava} />
        <div className={styles.name}>
            {user.lastname}
            <strong>{user.firstname}</strong>
        </div>
    </div>;
};

Profile.propTypes = {};

export default Profile;
