import React, { memo, useContext } from 'react';
import { ThemeContext } from './context/themeContext'

const App = () => {
    const { changeThemeFn, data } = useContext(ThemeContext);
    return (
        <div>
            {data?.light?.isActive && (<h1 className="light">Dark label</h1>)}
            {data?.dark?.isActive && (<h1 className="dark">Light label</h1>)}
            <button type="button" className={data.light.isActive ? 'light' : 'dark'} onClick={() => changeThemeFn(data.light.isActive ? 'dark' : 'light')}>changeTheme</button>
        </div>
    );
}

export default memo(App);