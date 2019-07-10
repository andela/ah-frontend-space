import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from './routes/Routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer autoClose={3000} />
        <Routes />
      </Provider>
    );
  }
}

export default App;
