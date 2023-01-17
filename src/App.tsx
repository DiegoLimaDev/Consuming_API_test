import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BackgroundColor } from './components/BackgroundColor/BackgroundColor';
import { Loader } from './components/Loader/Loader';
import { ProductsMap } from './components/ProductsMap/ProductsMap';
import { Text } from './components/Text/Text';
import { GlobalStyle } from './globalStyles';
import { MyContext } from './utils/GlobalContext';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useContext(MyContext);
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
    <BackgroundColor darkMode={isDarkMode}>
      <GlobalStyle />
      {isLoading ? <Loader visible={isLoading} /> : null}
      {myData?.map((e: any) => (
        <div key={e.id}>
          <Text size="medium" darkMode={isDarkMode}>
            {e.price}
          </Text>
          <ProductsMap data={myData} />
        </div>
      ))}
    </BackgroundColor>
  );
};
