import React from 'react';
import Description from './Description';
import Name from './Name';
import Price from './Price';
import Image from './Image';

const Product = ({ data }) => {
  return (
    <div class="card">
      <Image data={data} />
      <div class="card-body">
        <Name data={data} />
        <Description data={data} />
        <Price data={data} />
      </div>
    </div>
  );
};

export default Product;
