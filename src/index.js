import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


import { ThemeProvider } from './context/themeContext';

import './root.css';



ReactDOM.render(<ThemeProvider ><App /></ThemeProvider>, document.getElementById('root'));
