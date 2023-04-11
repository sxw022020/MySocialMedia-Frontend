import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// `ReactDOM.createRoot()` function with the DOM element
// inside which we want the component to be rendered,
// in this case the element with an ID of "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React application with the App component as the root, or first component
    <App />
);
