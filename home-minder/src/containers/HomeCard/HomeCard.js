import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomeCard extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const { item } = this.props
    return(
      <div>
        { item.name }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeCard)