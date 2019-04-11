import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import { Audit } from '../Audit/Audit'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1>HomeMinder</h1>
        </header>
        <div className='app-container'>
          <Route path="/audit" component={Audit}/>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(App);
