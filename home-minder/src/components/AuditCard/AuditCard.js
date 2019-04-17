import React from 'react';
import { NavLink } from 'react-router-dom'

const AuditCard = ({ room, name, id }) => (
  <div >
    <h3>{ room } { name }</h3>
    <NavLink to={`/${id}`}>Schedule</NavLink>
  </div>
)

export default AuditCard