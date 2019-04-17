import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Audit.css';
import AuditCard from '../../components/AuditCard/AuditCard'

export class Audit extends Component {

  render() {
    const notScheduled = this.props.items.filter(item => item.userScheduled === "")
    return(
      <div>
        <h2>Home Audit</h2>
        <h3>Click an item below to schedule a replacement date</h3>
        <div className="audit-container">
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
