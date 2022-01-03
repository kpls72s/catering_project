import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from 'react-bootstrap';
import Store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
    <Provider store = {Store}>
      <BrowserRouter basename='/catering_project' >
      <Routes >
        <Route path = "/*" element={<App />} />
      </Routes>
      </BrowserRouter>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
