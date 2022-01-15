import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { themeInitialValues, themeReducer } from '../reducers/themeReducer';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, themeInitialValues);
    const changeTheme = useCallback((type) => {
        const payload = true;
        if (type === 'light') {
            dispatch({ type: 'ACTIVATE_LIGHT_THEME', payload });
        }
        else {
            dispatch({ type: 'ACTIVATE_DARK_THEME', payload });
        }
    }, []);



    return (
        <ThemeContext.Provider value={
            {
                changeThemeFn: changeTheme,
                data: state
            }
        }>{children}</ThemeContext.Provider>
    );
}