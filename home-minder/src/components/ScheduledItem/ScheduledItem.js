import React from 'react';
import './ScheduledItem.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScheduledItem = ({ room, name, userScheduled, id }) => {
  userScheduled = new Date(userScheduled)
  const scheduledString = userScheduled.toDateString()
  return <div className="scheduled-item">
    <p className="scheduled-date">{ scheduledString }</p>
    <div className="item-block">
      <p className="scheduled-name">{ room } { name }</p>
      <NavLink to={`/item/${id}`}>View Reminder</NavLink>
    </div>
  </div>
}

export default ScheduledItem

ScheduledItem.propTypes = {
  room: PropTypes.string,
  name: PropTypes.string,
  userScheduled: PropTypes.string,
  id: PropTypes.number
}