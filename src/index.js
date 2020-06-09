import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
//import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import reducer from './reducers'
import Middleware from './middleware'
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducer,Middleware)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

