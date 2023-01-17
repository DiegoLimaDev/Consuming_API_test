import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';
import { Text } from './components/Text/Text';
import { GlobalStyle } from './globalStyles';

export const App = () => {
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
    <div>
      <GlobalStyle />
      {isLoading ? <Loader visible={isLoading} /> : null}
      {myData?.map((e: any) => (
        <div key={e.id}>
          <Text>{e.price}</Text>
          <p>{e.title}</p>
          <p>{e.price}</p>
          <p>{e.price}</p>
        </div>
      ))}
    </div>
  );
};
