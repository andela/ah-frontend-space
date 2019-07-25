import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import store from './store';
import 'babel-polyfill';
import { Routes } from './routes/Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <Routes />
      </Provider>
    );
  }
}

export default App;
