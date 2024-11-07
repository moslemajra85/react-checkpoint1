import React from 'react';
import Description from './Description';
import Name from './Name';
import Price from './Price';
import Image from './Image';

const Product = ({ data }) => {
  return (
    <div className="card">
      <Image url={data.url} />
      <Name name={data.name} />
      <Description description={data.description} />
      <Price price={data.price} />
    </div>
  );
};

export default Product;
