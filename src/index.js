import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './root/Root';
import './styles/styles.scss';

// configure store
const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));