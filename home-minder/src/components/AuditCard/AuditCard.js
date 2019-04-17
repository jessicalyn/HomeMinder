import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuditCard.css';
import PropTypes from 'prop-types';

const AuditCard = ({ room, name, id }) => (
  <div className="audit-card">
    <h3>{ room } { name }</h3>
    <NavLink to={`/item/${id}`}>Schedule</NavLink>
  </div>
)

export default AuditCard

AuditCard.propTypes = {
  room: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string
}