import React ,{useState} from "react";

function CategoryFilter({categories ,filterCategories}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      { categories.map((category) => {
        return <button key = {category} onClick={filterCategories} value={category} >{category}</button>
         })}
     
    </div>
  );
}

export default CategoryFilter;
