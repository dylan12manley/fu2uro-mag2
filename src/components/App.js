import React from "react";
import Art from './Art';
import Home from './Home';
import LandingPage from './LandingPage';
import './../styles/index.css';
import Error404 from './Error404';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const { createStore } = Redux;
const store = createStore(reducer);
console.log(store.getState());

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
