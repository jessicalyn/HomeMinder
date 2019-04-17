import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeContainer.css'

export class HomeContainer extends Component {

  render() {
    return(
      <div className="home-container">
        { }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(HomeContainer)