import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AppWrapper from './AppWrapper';
import ThemeContext, { ThemeProvider } from './context/themeContext';
import './root.css';


ReactDOM.render(<AppWrapper />, document.getElementById('root'));