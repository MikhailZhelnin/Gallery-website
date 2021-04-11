import React, { useState } from 'react';

import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="gallery">
      <Header />
      <Images setModalImage={setModalImage} />
      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} />}
    </div>
  );
}

export default App;
