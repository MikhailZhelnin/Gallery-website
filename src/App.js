import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Images from './components/Images/Images';
import Modal from './components/Modal/Modal';

import './App.css';

import data from './data';

const OPTIONS_VALUE = [
  {
    id: 1,
    value: '33.33333%',
    optionName: 'Three in Row',
  },
  {
    id: 2,
    value: '25%',
    optionName: 'Four in Row',
  },
  {
    id: 3,
    value: '20%',
    optionName: 'Five in Row',
  },
];

const tags = ['all', ...new Set(data.map((item) => item.tag.toLocaleLowerCase()))];

function App() {
  const [modalImage, setModalImage] = useState(null);
  const [selectWidth, setSelectWidth] = useState('33.33333%');
  const [tag, setTag] = useState(tags[0]);
  const [filteredImage, setFilteredImage] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilteredImage(data)
      : setFilteredImage(data.filter((image) => image.tag.toLocaleLowerCase() === tag));
  }, [tag]);

  return (
    <div className="gallery">
      <Header setSelectWidth={setSelectWidth} optionsValue={OPTIONS_VALUE} />
      <Filter tags={tags} setTag={setTag} tag={tag} />
      <Images
        setModalImage={setModalImage}
        selectWidth={selectWidth}
        filteredImage={filteredImage}
      />
      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} />}
    </div>
  );
}

export default App;
