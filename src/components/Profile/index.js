import React from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../../services/authService';

const Profile = (props) => {
    const user = getUser();
    return <div>
        <img src={user.profile_medium} />
        {user.lastname}
        {user.firstname}
    </div>;
};

Profile.propTypes = {};

export default Profile;
