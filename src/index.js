import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutSec from './AboutSec.jsx';
import Contact from './Contact.jsx';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/AboutSec" component={AboutSec} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
