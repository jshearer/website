import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';

import './app.css';

import React from 'react';
import { Router } from 'react-router';

import {App} from './components/App/App';
import {About, Portfolio, Resume, Home} from './components/Home/Home';

import FluxComponent from 'flummox/component';

import {Flux} from './stores/PageStateStore';

var flux = new Flux();

var routes = [
  { 
    path: '/',
    component: App,
    indexRoute: { component: Resume },
    childRoutes: [
      { path: 'resume', component: Resume},
      { path: 'about', component: About},
      { path: 'portfolio', component: Portfolio}
    ]
  }
]

function createElement(Component, props){
  return <FluxComponent flux={flux}>
    <Component {...props} />
  </FluxComponent>
}

React.render((
	<Router routes={routes} createElement={createElement}/>
), document.getElementById('app'));

export {routes};