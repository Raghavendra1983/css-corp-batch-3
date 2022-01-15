import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { themeInitialValues, themeReducer } from '../reducers/themeReducer';

const ThemeContext = createContext();
export default ThemeContext;

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, themeInitialValues);
    const changeTheme = useCallback((type) => {
        if (type === 'light') {
            const payload = {
                ...state,
                light: { isActive: true }
            }
            dispatch({ type: 'ACTIVATE_LIGHT_THEME', payload });
        }
        else {
            const payload = {
                ...state,
                dark: { isActive: true }
            }
            dispatch({ type: 'ACTIVATE_DARK_THEME', payload });
        }

    }, [])
    const values = useMemo(
        () => ({
            changeTheme,
            data: state
        })
        [changeTheme, state]
    )
    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
}