import React from 'react';
import ReactDOM from 'react-dom/client';
import './z_others/index.css';
import App from './z_others/App';
import reportWebVitals from './z_others/reportWebVitals';
import router from './routes'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </Provider>
  // </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
