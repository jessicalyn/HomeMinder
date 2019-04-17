import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeCard.css';
import { putUpdatedItem } from '../../thunks/putUpdatedItem';
import Calendar from 'react-calendar'

export class HomeCard extends Component {
  constructor(){
    super();
    this.state = {
      brand: "",
      model: "",
      name: "",
      purchaseLocation: "",
      userScheduled: "",
    }
  }

  componentDidMount() {
    console.log("props", this.props)
    const { brand, model, name, purchaseLocation } = this.props
    this.setState({ brand, model, name })
  }

  updateValue = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  updateCalendar = (userScheduled) => {
    const timestamp = new Date(userScheduled)
    console.log(timestamp)
    // this.setState({ userScheduled })
  }

  storeUpdates = async (e) => {
    console.log("storing")
    e.preventDefault()
    const data = this.state
    const { id } = this.props
    const url = `http://localhost:3001/api/v1/${id}`
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }
    await this.props.putUpdatedItem(url, options)
  }

  render() {
    const { lastReplaced, name, replaceRecommend, room, type } = this.props
    return(
      <div className="home-card">
        <form className="audit-form" onSubmit={ this.storeUpdates }>
          <h2>{ name } in your { room }</h2>
          <h3>Complete the sections below to schedule your next Home Reminder</h3>
          <label>Brand: </label>
          <input type="text" name="brand" value={ this.state.brand } onChange={ this.updateValue }></input>
          <label>Model: </label>
          <input type="text" name="model" value={ this.state.model } onChange={ this.updateValue }></input>
          <label>Purchase Location: </label>
          <input type="text" name="purchaseLocation" value={ this.state.purchaseLocation } onChange={ this.updateValue }></input>
          <label>Last { type } Date: { lastReplaced } </label>
          <label>Recommended { type } Timeline: { replaceRecommend }</label>
          <label>Choose next { type } date:</label>
          <Calendar name="userSchedule" value={ this.state.userScheduled } onChange={ this.updateCalendar }/>
          <button>Add to Schedule</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export const mapDispatchToProps = (dispatch) => ({
  putUpdatedItem: (url, options) => dispatch(putUpdatedItem(url, options))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeCard)