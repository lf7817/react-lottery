/*
 * @Author: lifan
 * @Date: 2019-01-28 13:32:55
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-29 22:38:59
 */
import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
// tslint:disable-next-line:ordered-imports
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
// tslint:disable-next-line:no-submodule-imports
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  version: 1,
  // migrate: createMigrate(migrations, { debug: true })
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware  = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store: Store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor,
  };
};
