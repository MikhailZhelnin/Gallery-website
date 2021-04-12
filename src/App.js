import React, { useState } from 'react';

import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
  const [modalImage, setModalImage] = useState(null);
  const [selectWidth, setSelectWidth] = useState('33.33333%');

  return (
    <div className="gallery">
      <Header setSelectWidth={setSelectWidth} />
      <Images setModalImage={setModalImage} selectWidth={selectWidth} />
      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} />}
    </div>
  );
}

export default App;
