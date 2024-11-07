import React from 'react';

const Image = ({ data}) => {
  return (
    <div>
      <img src={data.url}/>
    </div>
  );
};

export default Image;
