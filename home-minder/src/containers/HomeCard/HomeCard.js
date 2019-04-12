import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomeCard extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const { name, room } = this.props
    return(
      <div>
        { room } { name }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeCard)