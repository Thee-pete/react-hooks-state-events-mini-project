import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const [newText, setNewText] = useState("");
  const [newCategory, setNewCategory] =useState("");


  function addNewText(e){
    const updateText = e.target.value;
    setNewText(updateText);
  }
  function addNewCategory(e){
    const updateCategory = e.target.value;
    setNewCategory(updateCategory);
  }

  function addNewTask(e){
    e.preventDefault();
      const newTask = {
      text: newText,
      category: newCategory,
    }

    const newTasks  = [...items, newTask];
    setTasks(newTasks);
  }


  function removeTask(taskToDelete){
    setTasks(tasks.filter((task) => {
      task.text !== taskToDelete;

    }))

  }
  function filterCategories(e){
    e.target.className = "selected";;
    let value = e.target.value;
    setCategory(value);
    if(value === "All"){
      setTasks(TASKS);
    }else{
      const updatedTasks =tasks.filter(task => task.category === value);
      setTasks(updatedTasks);
    }
  }







  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} filterCategories = {filterCategories}  />
      <NewTaskForm categories= {CATEGORIES} onTaskFormSubmit= {addNewTask} onAddNewText= {addNewText} onAddNewCategory = {addNewCategory}/>
      <TaskList tasks={tasks} removeTask= {removeTask}/>
    </div>
  );
}

export default App;
