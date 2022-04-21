import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {createStore} from 'redux';
import allReducers from './../src/components/Reducers'
import {Provider} from 'react-redux';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


const persistedReducer = persistReducer({key: 'persist-key', storage}, allReducers);
const store = createStore(
  persistedReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
  );

const persistor = persistStore(store);


  
 
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);