import { Task } from "./Task";
import { useEffect, useState } from "react";
export const TaskList = () => {
  const [listTasks, setListTasks] = useState([]);
  const [task, setTask] = useState("");
  const [descTask, setDescTask] = useState("");
  function handleAddTask() {
    let newTask = {
      name: task,
      desc: descTask,
      state: false,
    };
    let newListTask = [...listTasks];
    newListTask = [...newListTask, newTask];
    setListTasks(newListTask);
    localStorage.setItem("listTasks", JSON.stringify(newListTask));
  }
  useEffect(() => {
    const localStorageData = localStorage.getItem("listTasks");
    if (localStorageData) {
      const storedListTasks = JSON.parse(localStorageData);
      setListTasks(storedListTasks);
    }
  }, []);
// falta local storage checkbox
  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <input value={descTask} onChange={(e) => setDescTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {listTasks.map((element, index) => (
          <Task key={index} item={element} />
        ))}
      </ul>
    </div>
  );
};
