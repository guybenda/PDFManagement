import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import RTL from './RTL';
import './index.css';

import moment from 'moment';
import 'moment/locale/he';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(rootReducer,applyMiddleware(thunk))

moment.locale('he');

ReactDOM.render(
	<BrowserRouter>
		<RTL>
			<Provider store={store}>
				<App />
			</Provider>
		</RTL>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
