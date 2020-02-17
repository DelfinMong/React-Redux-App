import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider }  from "react-redux";
import reducer from "./reducer"

import Holiday from "./components/Holiday"
import Button from "./components/Button"


const store = createStore(reducer,applyMiddleware(thunk))

function App() {
  return (
    <Provider store={ store }>
    <div className="App">
      <header className="App-header">
         <h1>Public Holiday Lists</h1>
      </header>
      <Holiday />
      <Button /> 
    </div>
    </Provider>
  );
}

export default App;
