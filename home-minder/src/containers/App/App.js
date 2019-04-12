import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { Audit } from '../Audit/Audit';
import { error404 } from '../../components/error404/error404';
import HomeContainer from '../Home Container/HomeContainer';
import { fetchAllItems } from '../../thunks/fetchAllItems'

export class App extends Component {

  componentDidMount() {
    const url = "http://localhost:3001/api/v1/home"
    this.props.fetchAllItems(url)
  }

  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1>HomeMinder</h1>
          { this.props.error.message }
        </header>
        <div className='app-container'>
          <Switch>
            <Route exact path='/' component={HomeContainer}/>
            <Route path="/audit" component={Audit}/>
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
