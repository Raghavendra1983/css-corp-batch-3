import React from 'react';
import App from './app';
import { ThemeProvider } from './context/themeContext';

function AppWrapper(props) {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}

export default AppWrapper;