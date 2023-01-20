import { dataShape } from './interface';

export const filterService = (
  data: dataShape[],
  order: any,
  category: any,
  name: any,
) => {
  let myData: dataShape[];
  if (order === 'highest') {
    myData = data.sort((a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
  } else if (order === 'lowest') {
    myData = data.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  } else if (order === 'rating') {
    myData = data.sort((a, b) => {
      if (a.rating.rate > b.rating.rate) return -1;
      if (a.rating.rate < b.rating.rate) return 1;
      return 0;
    });
  } else {
    myData = data.sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    });
  }

  if (category === 'All') {
    myData = myData.filter((e) =>
      e.title.toLowerCase().includes(name.toLowerCase()),
    );
  } else {
    myData = myData
      .filter((e) => e.category.toLowerCase() === category.toLowerCase())
      .filter((e) => e.title.toLowerCase().includes(name.toLowerCase()));
  }
  return myData;
};
