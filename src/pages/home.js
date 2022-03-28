import React, { useContext } from 'react';

import SwitchButton from '../components/button/button';
import Todo from '../pages/todo/Todo'
import { ThemeContext } from '../themes/ThemeContext';

function Home() {
    const theme = useContext(ThemeContext);
    const isDarkMode = theme.state.darkMode;

    return (
        <div className={`App bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
            <SwitchButton />
            <Todo isDarkMode={isDarkMode} />
        </div>
    );
}

export default Home;