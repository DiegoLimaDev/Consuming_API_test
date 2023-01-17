import React, { createContext, useState } from 'react';
import P from 'prop-types';

type isDarkModeType = {
  isDarkMode: string;
  setIsDarkMode: React.Dispatch<React.SetStateAction<string>>;
};

export const MyContext = createContext<isDarkModeType>({} as isDarkModeType);

export const GlobalContext = ({ children }: { children: any }) => {
  const [isDarkMode, setIsDarkMode] = useState('light');
  return (
    <MyContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </MyContext.Provider>
  );
};

GlobalContext.propTypes = {
  children: P.node,
};

export const useIsDarkMode = () => React.useContext(MyContext);
