import React from 'react';
import { dataShape } from '../../services/interface';
import P from 'prop-types';

export const ProductsMap = ({ data }: { data: dataShape[] }) => {
  return (
    <>
      {data.map((e) => (
        <div key={e.id}>
          <p>{e.price}</p>
        </div>
      ))}
    </>
  );
};

ProductsMap.propTypes = {
  data: P.array.isRequired,
};
