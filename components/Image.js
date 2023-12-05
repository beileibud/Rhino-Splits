// components/ImageComponent.js

import Image from 'next/image';
import React from 'react';

const ImageComponent = ({ src, alt, width, height, layout, objectFit }) => {
  return <Image src={src} alt={alt} width={width} height={height} layout={layout} objectFit={objectFit} />;
};

export default ImageComponent;
