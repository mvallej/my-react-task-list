import { useState } from "react";
import { useTask } from "./useTask";
export const Task = (props) => {
  const { item, handleDeleteTask } = props;
  const [check, setCheck] = useState(item.state);
  const [showImput, setShowImput] = useState(false)

  const handleImput= (e) => {
    e.preventDefault()
    setCheck(!check)
  }
  
  return (
    <div>
      <li className="tareas">
        <input className="check"
          onChange={(e) => handleImput(e)}
          type="checkbox"
          checked={check}
        />
        <h3 className="name">{item.name}</h3>
        <p className="description">{item.desc}</p>
        <button onClick={()=>handleDeleteTask(item.id)}>Delete Task</button>
        <button onClick={()=> setShowImput(true)}>Edit Task</button>
      </li>
        {showImput && <h1>hola mundo</h1>}
    </div>
  );
};