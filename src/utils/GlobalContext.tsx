import React, { createContext, useState } from 'react';
import P from 'prop-types';

type MyContextTypes = {
  isDarkMode: string;
  setIsDarkMode: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isDrawerVisible: boolean;
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  numberId: any;
  setNumberId: React.Dispatch<React.SetStateAction<any>>;
  category: any;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
};

export const MyContext = createContext<MyContextTypes>({} as MyContextTypes);

export const GlobalContext = ({ children }: { children: any }) => {
  const [isDarkMode, setIsDarkMode] = useState('light');
  const [value, setValue] = useState('');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [numberId, setNumberId] = useState();
  const [category, setCategory] = useState('');

  return (
    <MyContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        value,
        setValue,
        isDrawerVisible,
        setIsDrawerVisible,
        numberId,
        setNumberId,
        category,
        setCategory,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

GlobalContext.propTypes = {
  children: P.node,
};

export const useIsDarkMode = () => React.useContext(MyContext);

export const useSearchValue = () => React.useContext(MyContext);

export const useIsDrawerVisible = () => React.useContext(MyContext);

export const useNumberId = () => React.useContext(MyContext);

export const useCategory = () => React.useContext(MyContext);
