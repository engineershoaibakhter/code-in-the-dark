// ExampleCarouselImage.jsx

import React from 'react';

const CarouselImage = ({ imageUrl, text }) => {
  return (
    <img
      className="d-block w-100"
      src={imageUrl}
      alt={text}
    />
  );
};

export default CarouselImage;
