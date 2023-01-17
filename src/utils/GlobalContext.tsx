import React, { createContext, useState } from 'react';
import P from 'prop-types';

type isDarkMode = 'light' | 'dark';

export const MyContext = createContext<isDarkMode>('light');

export const GlobalContext = ({ children }: { children: any }) => {
  const [isDarkMode, setIsDarkMode] = useState<isDarkMode>('light');
  const providedValues = [isDarkMode, setIsDarkMode];
  return (
    <MyContext.Provider value={providedValues}>{children}</MyContext.Provider>
  );
};

GlobalContext.propTypes = {
  children: P.node,
};
