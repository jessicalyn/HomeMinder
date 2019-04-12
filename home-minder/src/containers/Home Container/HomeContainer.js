import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeCard from '../HomeCard/HomeCard'

export class HomeContainer extends Component {

  displayAllItems = () => {
    return this.props.items.map(item => {
      return <HomeCard key={ item.id } {...item} />
    })
  }

  render() {
    return(
      <div>
        { this.props.items && this.displayAllItems() }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(HomeContainer)