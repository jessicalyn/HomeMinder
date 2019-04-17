import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeCard.css';
import { putUpdatedItem } from '../../thunks/putUpdatedItem';
import Calendar from 'react-calendar';
import { Redirect } from 'react-router-dom'

export class HomeCard extends Component {
  constructor(){
    super();
    this.state = {
      brand: "",
      model: "",
      name: "",
      purchaseLocation: "",
      userScheduled: "",
      recommendation: "",
      toHomepage: false
    }
  }

  componentDidMount() {
    const { brand, model, name, purchaseLocation, recommendation } = this.props
    this.setState({ brand, model, name, purchaseLocation, recommendation })
  }

  updateValue = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  updateCalendar = (userScheduled) => {
    const timestamp = new Date(userScheduled)
    console.log(timestamp)
    this.setState({ userScheduled: timestamp })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const data = this.state
    const { id, putUpdatedItem } = this.props
    const url = `http://localhost:3001/api/v1/${id}`
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }
    await putUpdatedItem(url, options)
    this.setState({ toHomepage: true })
  }

  render() {
    const { name, recommendation, room, type } = this.props
    if (this.state.toHomepage) return <Redirect to='/' />
    return(
      <div className="home-card">
        <h2>{ name } in your { room }</h2>
        <h3>Complete the sections below to schedule your next Reminder</h3>
        <form className="home-form" onSubmit={ this.handleSubmit }>
          <label>Brand: </label>
          <input type="text" name="brand" value={ this.state.brand } onChange={ this.updateValue }></input>
          <label>Model: </label>
          <input type="text" name="model" value={ this.state.model } onChange={ this.updateValue }></input>
          <label>Purchase Location: </label>
          <input type="text" name="purchaseLocation" value={ this.state.purchaseLocation } onChange={ this.updateValue }></input>
          <label>Recommended { type } Timeline: <span>{ recommendation }</span></label>
          <label>Choose next { type } date:</label>
          <Calendar className="calendar" name="userSchedule" onChange={ this.updateCalendar }/>
          <button className="card-button">Add to Schedule</button>
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