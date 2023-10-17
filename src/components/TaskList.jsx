import { Task } from "./Task";
import { useEffect, useState } from "react";
import { useTask } from "./useTask";

export const TaskList = () => {
 const {listTasks, handleAddTask, handleDeleteButton} = useTask();
// falta local storage checkbox
const [task, setTask] = useState("");
const [descTask, setDescTask] = useState("");
const [formValidation, setFormValidation] = useState({
  task: undefined
});

const handleTaskChange = (event) =>{
  const value= event.target.value;
event.preventDefault()
   if (value.length === 0) {
    setFormValidation({
    ...formValidation,
    task:"task is required"})}

    else if (value.length < 3) {
    setFormValidation({
    ...formValidation,
    task:"task is too short"})
    }
    else {
      setFormValidation({
        ...formValidation,
        task:""})
    }
    setTask(value);
  };


const handleButton= () => {
  console.log("texto")
handleAddTask(task, descTask)
}
console.log(listTasks)

const isFormValid = Object.keys(formValidation).every(
  (key) => formValidation[key] === ""
);

  return (
    <div>
      <form>
        <div>
          <label>
            Task
      <input value={task} onChange={handleTaskChange} />
      </label>
      {formValidation.task && (
          <span className="error" role="alert">
            {formValidation.task}
          </span>)}
      </div>
      <div>
      <label>
        Task Description
      <input value={descTask} onChange={(e) => setDescTask(e.target.value)} />
      </label>
      </div>
      <button disabled={!isFormValid} onClick={()=>handleButton()}>Add Task</button>
      <ul>
        {listTasks.map((element, index) => (
          <Task handleDeleteTask= {handleDeleteButton} key={index} item={element}/>
        )) 
        }
      </ul>
      </form>
    </div>
  );
};
