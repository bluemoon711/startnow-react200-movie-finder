import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import MovieSearchContainer from './components/MovieSearchContainer';
import MovieDetailContainer from './components/MovieDetailContainer';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={MovieSearchContainer} />
          <Route path='/movie/:id' component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}
