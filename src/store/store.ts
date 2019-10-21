import {History} from 'history';
import {combineReducers} from 'redux';
import * as Redux from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import {Store} from './constants';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {loginReducer1} from "../containers/Login/loginReducer";

/**
 * allows usage of ReduxDevTools only in dev environment, not in production
 * @see https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm */ // tslint:disable-line:max-line-length
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const mainReducer = combineReducers({
  login: loginReducer1
})

export const rootReducerV1 = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: mainReducer
  });

type ActionTypes = any;
/**
 * Create the redux store
 */
export function createStore(history: History): Store {
  const store = Redux.createStore(
    rootReducerV1(history),
    composeEnhancers(
      Redux.applyMiddleware(
        routerMiddleware(history)
      )
    )
  );
  return store;
}