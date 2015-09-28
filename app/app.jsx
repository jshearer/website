import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';

import './app.css';

import React from 'react';
import { Router } from 'react-router';

import {App} from './components/App/App';
import {Home,Portfolio,About} from './components/Home/Home';

var routes = [
  { 
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'home', component: Home},
      { path: 'about', component: About },
      { path: 'portfolio', component: Portfolio }
    ]
  }
]

React.render((
	<Router routes={routes}/>
), document.getElementById('app'));

export {routes};