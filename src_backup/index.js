import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import store from './store';
import App from './container/';
// import { subscribeRecord } from './unit';

// subscribeRecord(store);
// console.log(store.getState())
render(
  // <Provider store={store}> 
  	<App></App>
  // </Provider>
    , document.getElementById('root')
);

