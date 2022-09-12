import React from 'react';

const Categories = ({allCategories, category}) => {
  return (
    <div className="btn-container">
      {allCategories.map((categories) => {
        <button>{category}</button>
      })}
    </div>
  );
};

export default Categories;