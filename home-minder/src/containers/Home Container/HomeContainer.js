import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeCard from '../HomeCard/HomeCard'

export class HomeContainer extends Component {

  render() {
    return(
      <div>
        { }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(HomeContainer)