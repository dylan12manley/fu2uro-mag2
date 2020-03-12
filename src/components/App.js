import React from "react";
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/index.css';
import rootReducer from './../reducers/index'
import Art from './Art';
import Home from './Home';
import LandingPage from './LandingPage';
import Error404 from './Error404';
import PropTypes from 'prop-types';

const store = createStore(rootReducer);

const App = () => (
  <>
    <div>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/art' component={Art} />
      <Route component={Error404} />
    </Switch>
    </div>
  </>
);

export default App;
