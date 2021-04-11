import React from 'react';

import './Images.css';

import data from '../../data';

const Images = ({ setModalImage }) => {
  return (
    <div className="gallery__images">
      {data.map((image) => (
        <div key={image.id} className="gallery__image-img" onClick={() => setModalImage(image.img)}>
          <img src={image.img} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default Images;
