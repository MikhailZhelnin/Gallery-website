import React from 'react';

import './Filter.css';

const Filter = ({ tags, setTag, tag }) => {
  return (
    <div className="gallery__filter">
      {tags.map((item, index) => (
        <button
          key={index}
          className={tag === item ? 'gallery__filter-btn btn__active' : 'gallery__filter-btn'}
          onClick={(e) => setTag(e.target.innerHTML)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Filter;
