import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import {loadData} from './actions/dataActions';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadData());

ReactDOM.render(
    <Provider store={store}>
    <Router><App/></Router>
    </Provider>,document.getElementById('root'));