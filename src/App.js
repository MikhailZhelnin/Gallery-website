import React, { useState } from 'react';

import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
  const [modalImage, setModalImage] = useState(null);
  const [selectedWidth, setSelectedWidth] = useState('33.33333%');
  const [selectedHeight, setSelectedHeight] = useState('340px');

  return (
    <div className="gallery">
      <Header setSelectedWidth={setSelectedWidth} />
      <Images setModalImage={setModalImage} selectedWidth={selectedWidth} />
      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} />}
    </div>
  );
}

export default App;
