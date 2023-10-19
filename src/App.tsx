import React, { useEffect, useState } from 'react';
import { BackgroundColor } from './components/BackgroundColor/BackgroundColor';
import { Loader } from './components/Loader/Loader';
import { ProductsMap } from './components/ProductsMap/ProductsMap';
import { GlobalStyle } from './styles/globalStyles';
import { useIsDarkMode } from './utils/GlobalContext';
import { ProductsService } from './services/products.service';
import { ProductsModel } from './domain/products';

export const App = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();
  const [myData, setMyData] = useState<ProductsModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      setIsLoading(true);
      const result = await new ProductsService().getProducts();
      setMyData(result);
      setIsLoading(false);
    };
    fecthData();
  }, []);

  return (
    <BackgroundColor darkmode={isDarkMode}>
      <GlobalStyle />
      {isLoading && <Loader visible={isLoading} />}
      {!isLoading && <ProductsMap data={myData} />}
    </BackgroundColor>
  );
};
