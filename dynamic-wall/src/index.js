// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import Login from './Components/Login.js';
import Home from './Components/Home.js';

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	 		<IndexRoute component={Login}/>
	 		<Route path="home" component={Home} />
	 	</Route>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
