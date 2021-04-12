import React from 'react';
import { motion } from 'framer-motion';

import './Images.css';

import data from '../../data';

const Images = ({ setModalImage, selectWidth }) => {
  return (
    <div className="gallery__images">
      {data.map((image) => (
        <div
          key={image.id}
          className="gallery__image-img"
          onClick={() => setModalImage(image.img)}
          style={{ width: selectWidth }}>
          <motion.img src={image.img} alt="img" whileHover={{ scale: 1.1 }} />
        </div>
      ))}
    </div>
  );
};

export default Images;
