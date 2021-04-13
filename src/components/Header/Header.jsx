import React from 'react';

import './Header.css';

const Header = ({ setSelectWidth, optionsValue }) => {
  const handleSelect = (e) => {
    setSelectWidth(e.target.value);
  };

  return (
    <div className="gallery__header">
      <div className="gallery__header-wrapper">
        <h2 className="gallery__header-title">gallery website</h2>
        <select className="gallery__header-select" onChange={handleSelect}>
          {optionsValue.map((item) => (
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
