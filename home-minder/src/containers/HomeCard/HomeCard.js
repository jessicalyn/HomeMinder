import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeCard.css'

export class HomeCard extends Component {
  constructor(){
    super();
    this.state = {
      brand: "",
      category: "",
      id: "",
      lastReplaced: "",
      model: "",
      name: "",
      purchaseLocation: "",
      replaceRecommend: "",
      room: "",
      type: "",
      userScheduled: "",
    }
  }

  updateValue = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  storeUpdates = async (e) => {
    e.preventDefault()
    const data = this.state
    const url = `http://localhost:3001/api/v1/${this.state.id}`
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }
    await this.props.putUpdatedItem(url, options)
    console.log("stored updates")
  }

  render() {
    const { lastReplaced, name, replaceRecommend, room, type } = this.props
    return(
      <div>
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
          <input type="text" name="userSchedule" value={ this.state.userScheduled } onChange={ this.updateValue }></input>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeCard)