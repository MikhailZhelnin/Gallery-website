import React from 'react';

import './Header.css';

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

const Header = ({ setSelectWidth }) => {
  const handleSelect = (e) => {
    setSelectWidth(e.target.value);
  };

  return (
    <div className="gallery__header">
      <div className="gallery__header-wrapper">
        <h2 className="gallery__header-title">gallery website</h2>
        <select className="gallery__header-select" onChange={handleSelect}>
          {OPTIONS_VALUE.map((item) => (
            <option key={item.id} value={item.value}>
              {item.optionName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
