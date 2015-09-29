import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';

import './app.css';

import React from 'react';
import { Router } from 'react-router';

import {App} from './components/App/App';
import {Home,Portfolio,About} from './components/Home/Home';

import FluxComponent from 'flummox/component';

import {Flux} from './stores/PageStateStore';

var flux = new Flux();

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

function createElement(Component, props){
  return <FluxComponent flux={flux} connectToStores={{
                                          pages: (store) => {
                                            return store.getActive();
                                          }
                                        }}>

    <Component {...props} />
  </FluxComponent>
}

React.render((
	<Router routes={routes} createElement={createElement}/>
), document.getElementById('app'));

export {routes};