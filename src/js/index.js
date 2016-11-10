import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import {loadTranslations,setLocale,syncTranslationWithStore} from 'react-redux-i18n';
import LangString from './utils/langString';
import routes from './routes';
import RootReducer from './reducers/rootReducer';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../css/main.scss';

let store = createStore(RootReducer, applyMiddleware(Thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(LangString));
store.dispatch(setLocale('en'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);