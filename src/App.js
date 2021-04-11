import React from 'react';

import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
  return (
    <div className="gallery">
      <Header />
      <Images />
      <Modal />
    </div>
  );
}

export default App;
