import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Audit from '../Audit/Audit';
import error404 from '../../components/error404/error404';
import HomeContainer from '../Home Container/HomeContainer';
import { fetchAllItems } from '../../thunks/fetchAllItems';
import HomeCard from '../HomeCard/HomeCard'

export class App extends Component {

  componentDidMount() {
    const url = "http://localhost:3001/api/v1/home"
    this.props.fetchAllItems(url)
  }

  render() {
    const { error, items } = this.props
    return (
      <div className='app'>
        <header className='app-header'>
          <h1>HomeMinder</h1>
          <NavLink className="nav-link" to='/'>Home</NavLink>
          <NavLink className="nav-link" to='/audit'>Audit</NavLink>
          { error }
        </header>
        <div className='app-container'>
          <Switch>
            <Route exact path='/' component={HomeContainer}/>
            <Route path="/audit" component={Audit}/>
            <Route path='/item/:id' render={({ match }) => {
              const { id } = match.params
              const routeItem = items.find(item => item.id == id)
              if (routeItem === undefined) return <error404 />
              return <HomeCard {...routeItem} />
            }} />
            <Route component={error404}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  items: state.items,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  fetchAllItems: (url) => dispatch(fetchAllItems(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
