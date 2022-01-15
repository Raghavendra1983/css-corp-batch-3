import React, { memo, useContext } from 'react';
import ThemeContext from './context/themeContext'

const App = () => {
    const { changeTheme, data } = useContext(ThemeContext) || {};
    console.log(data);
    return (
        <div>
            {data?.light?.isActive && (<h1 className="light">Dark label</h1>)}
            {data?.dark?.isActive && (<h1 className="dark">Light label</h1>)}
            <button type="button" onClick={changeTheme}></button>
        </div>
    );
}

export default memo(App);