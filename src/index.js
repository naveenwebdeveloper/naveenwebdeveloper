import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Singup from './Singup';
import Singin from './Singin';
// import TestStore from './TextStore';
// import store from './store';
// import {Provider} from 'react-redux'
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose'
// import cors from 'cors';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route path="/" component={Apps} exact />
      <Route path="/Singin" component={Singin} exact />
      <Route path="/singup" component={Singup} exact/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
