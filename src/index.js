import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store';
import App from "./App";
import {allActionCreators} from './store/reducers/action-creators'

store.dispatch(allActionCreators.fetchColors());

ReactDOM.render(
<Provider store={store}>
   <BrowserRouter>
      <App />
   </BrowserRouter>
</Provider>,
   document.getElementById("root"));