import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BackgroundColor } from './components/BackgroundColor/BackgroundColor';
import { Loader } from './components/Loader/Loader';
import { ProductsMap } from './components/ProductsMap/ProductsMap';
import { GlobalStyle } from './globalStyles';
import { useIsDarkMode } from './utils/GlobalContext';

export const App = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      let result;
      const url = 'https://fakestoreapi.com/products';
      setIsLoading(true);
      result = await axios.get(url);
      setMyData(result.data);
      setIsLoading(false);
    };
    fecthData();
  }, []);

  return (
    <BackgroundColor darkmode={isDarkMode}>
      <GlobalStyle />
      {isLoading ? <Loader visible={isLoading} /> : null}
      {!isLoading ? <ProductsMap data={myData} /> : null}
    </BackgroundColor>
  );
};
