import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/reset.css';
import GlobalStyles from './components/GlobalStyles';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </ConfigProvider>
  </React.StrictMode>
);
reportWebVitals();
