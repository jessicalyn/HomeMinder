import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { Audit } from '../Audit/Audit';
import { error404 } from '../../components/error404/error404';
import { HomeContainer } from '../Home Container/HomeContainer'

export class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1>HomeMinder</h1>
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
  items: state.items
})

export default connect(mapStateToProps)(App);
