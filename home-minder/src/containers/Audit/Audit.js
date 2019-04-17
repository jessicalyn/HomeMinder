import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Audit.css';
import AuditCard from '../../components/AuditCard/AuditCard';
import PropTypes from 'prop-types';

export class Audit extends Component {

  render() {
    const { items } = this.props
    const notScheduled = items.filter(item => item.userScheduled === "")
    return(
      <div className="audit-container">
        <h2>Home Audit</h2>
        <h3>Click an item below to schedule a replacement date</h3>
        <div className="audit-cards-container">
          { notScheduled.map(item => <AuditCard key={ item.id } {...item}/>) }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(Audit);

Audit.propTypes = {
  items: PropTypes.array
}