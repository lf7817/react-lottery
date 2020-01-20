/*
 * @Author: lifan
 * @Date: 2019-01-28 13:32:55
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:52:20
 */
import { applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // migrate: createMigrate(migrations, { debug: true })
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store: Store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor,
  };
};
