import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

// With the spread operator the name of the props must be exactly the same as the name of the data information
const Card = ({ avatar_url, id, login }) => {

    return (
        <div className="card-main">
            <div className="card" >
                <div className="card-header">
                    <div className="checkbox-user"><input type="checkbox" id="checked_user" name="checked" value="checked" /></div>
                    <div className="card-image"><img src={avatar_url} alt="avatar_user" /></div>
                </div>
                <div className="card-id">
                    <h4>{id}</h4>
                </div>
                <div className="card-login">
                    <h4>{login}</h4>
                </div>
                <div className="card-view-profile">
                    <button className="view-profile">View profile</button>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,

};


export default Card;