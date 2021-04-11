import React from 'react';

import './Modal.css';

const Modal = ({ modalImage, setModalImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('gallery__modal')) {
      setModalImage(null);
    }
  };

  return (
    <div className="gallery__modal" onClick={handleClick}>
      <img src={modalImage} alt="big pic" />
    </div>
  );
};

export default Modal;
