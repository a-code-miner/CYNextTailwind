'use client';

import { createContext, useState } from "react";

export const MainContext = createContext({
    darkMode: 'dark',
    setDarkMode: () => { }
});




import React from "react";

const MainContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState('light');

    return (
        <MainContext.Provider value={{
            darkMode,
            setDarkMode
        }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainContextProvider;



