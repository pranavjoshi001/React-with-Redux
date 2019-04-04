import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import {loadCourses} from './actions/CourseActions';
import './styles/styles.css'; // Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/ConfigureStore';

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
