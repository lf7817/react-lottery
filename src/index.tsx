/*
 * @Author: lifan
 * @Date: 2019-01-26 08:54:11
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:51:43
 */
import "normalize.css";
import "./assets/scss/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./containers";
import configureStore from "./store";
import * as serviceWorker from "./utils/serviceWorker";

const configStore = configureStore();

ReactDOM.render(
  <Provider store={configStore.store}>
    <PersistGate persistor={configStore.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => {
    // console.log('success');
  },
  onUpdate: (registration: ServiceWorkerRegistration) => {
    if (window.confirm("监测到更新，点击更新")) {
      try {
        registration.waiting && registration.waiting.postMessage("skipWaiting");
      } catch (e) {
        window.location.reload();
      }
    }
  },
});
