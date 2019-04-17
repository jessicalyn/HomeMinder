import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeContainer.css';
import ScheduledItem from '../../components/ScheduledItem/ScheduledItem'

export class HomeContainer extends Component {

  render() {
    const { items } = this.props
    const scheduledItems = items.filter(item => item.userScheduled != "")
    const orderedItems = scheduledItems.sort((a, b) => {
      return new Date(a.userScheduled) - new Date(b.userScheduled)
    })
    return(
      <div className="home-container">
        <h3>Schedule reminders for items around your home</h3>
        <div>
          <h4>Upcoming Reminders</h4>
          { orderedItems.map(item => <ScheduledItem {...item} />) }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(HomeContainer)