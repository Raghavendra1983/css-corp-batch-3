import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { CityProvider } from './context/cityContext';

ReactDOM.render(<CityProvider><App /></CityProvider>, document.getElementById("root"));