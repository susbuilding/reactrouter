import {Router, Route, hashHistory, Link} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums.js';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import {IndexRedirect} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
	<Route path="/" component={AppContainer}>
		<IndexRedirect to="/albums"/>
		<Route path="/albums" component={Albums}/>
		<Route path="/albums/:albumId" component={Album}/>
		<Route path="/artists" component={Artists}/>
		</Route>
	</Router>,
  document.getElementById('app')
);

