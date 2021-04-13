import React from 'react';
import { motion } from 'framer-motion';

import './Images.css';

const Images = ({ setModalImage, selectWidth, filteredImage }) => {
  return (
    <div className="gallery__images">
      {filteredImage.map((image) => (
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
