
import './App.css'
import Header from './components/Header'
import { useState } from 'react'


function App() {
const [listTasks, setListTasks] = useState([]);
const [task,setTask]=useState("")

function handleAddTask() {
  setListTasks([...listTasks, task])
}

  return (
  <div>
    <Header/>
    <input value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={handleAddTask}>Add Task</button>
    <ul>
      {listTasks.map((element)=>(
        
        <li key={element}>{element}</li>
      ))}

    </ul>
  </div>
  );}

export default App
