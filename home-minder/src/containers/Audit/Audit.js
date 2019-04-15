import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export class Audit extends Component {

  render() {
    //should this go in component did mount instead? okay to have a bunch in render?
    const notScheduled = this.props.items.filter(item => item.userScheduled === "")
    const showNotScheduled = notScheduled.map(item => {
      return <div>
        <h3>{ item.room } { item.name }</h3>
        <NavLink to={`/${item.id}`}>To HomeCard</NavLink>
      </div>
    })
    return(
      <div>
        <h2>Home Audit</h2>
        { showNotScheduled }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(Audit);
