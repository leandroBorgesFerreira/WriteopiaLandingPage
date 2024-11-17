import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ColorTheme() {
  const appStyle = {
    backgroundColor: 'black',
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen flex transition-colors duration-200 text-gray-900 dark:text-white">
      <App />
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorTheme />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
