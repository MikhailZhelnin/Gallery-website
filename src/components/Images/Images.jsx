import React, { useState } from 'react';

import './Images.css';

import data from '../../data';

const Images = ({ setModalImage }) => {
  const [images, setImages] = useState(data);

  return (
    <div className="gallery__images">
      {images.map((image) => (
        <div key={image.id} className="gallery__image-img" onClick={() => setModalImage(image.img)}>
          <img src={image.img} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Images;
