import React from 'react';
import { motion } from 'framer-motion';

import './Modal.css';

const Modal = ({ modalImage, setModalImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('gallery__modal')) {
      setModalImage(null);
    }
  };

  return (
    <motion.div
      className="gallery__modal"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <motion.img
        src={modalImage}
        alt="big pic"
        initial={{ top: '-50%' }}
        animate={{ top: '50%' }}
      />
    </motion.div>
  );
};

export default Modal;
