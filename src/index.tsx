/*
 * @Author: lifan
 * @Date: 2019-01-26 08:54:11
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-26 08:54:49
 */
import React from 'react';
// tslint:disable-next-line:no-submodule-imports
import 'react-app-polyfill/ie9';
import ReactDOM from 'react-dom';
import App from './containers';
import * as serviceWorker from './utils/serviceWorker';

import 'normalize.css';
import './assets/scss/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
