import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react'
import AppStore from './models/appStore'
import DevTools from 'mobx-react-devtools'
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css'
import './assets/styles/base.css'

const store = new AppStore()

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <DevTools />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
