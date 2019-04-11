import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Audit extends Component {
  render() {
    return(
      <div>
        <h2>Home Audit</h2>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(Audit);