import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from './store/widgetSlice';
import './App.css';
import Dashboard from './components/Dashboard';

const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
});

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;