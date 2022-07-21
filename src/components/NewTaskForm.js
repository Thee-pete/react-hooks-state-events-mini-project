import React from "react";

function NewTaskForm({categories , onTaskFormSubmit, onAddNewText, onAddNewCategory}) {

  const validCats = categories.filter(category=>category !== "All");
  const validCatsList = validCats.map(validCat=>{
    return <option key={validCat}>{validCat}</option>
  });

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text"  onChange = {onAddNewText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onAddNewCategory}>
          {validCatsList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
