import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { history } from './history';

export default function configureStore() {
  return createStore(
    combineReducers({ router: connectRouter(history) }),
    applyMiddleware(routerMiddleware(history))
  );
}
