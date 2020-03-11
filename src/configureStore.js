import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { history } from './history';

export default function configureStore() {
  return createStore(
    combineReducers({ router: routerReducer }),
    applyMiddleware(routerMiddleware(history))
  );
}
