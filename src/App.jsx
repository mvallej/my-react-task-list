
import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react'


function App() {
 
const [listTasks, setListTasks] = useState([]);
const [task,setTask]=useState("")
const [check,setCheck]=useState(false);


function handleAddTask() {
  let newListTask= [...listTasks];
  newListTask= [...newListTask, task]
  setListTasks(newListTask);
  localStorage.setItem('listTasks', JSON.stringify(newListTask));

}
useEffect(()=>{
  const localStorageData= localStorage.getItem('listTasks');
  const storedListTasks= JSON.parse(localStorageData);
  setListTasks(storedListTasks);
}, [])
  return (
  <div>
    <Header/>
    <input value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={handleAddTask}>Add Task</button>
    <ul>
      {listTasks.map((element)=>(
        
        <li key={element}><input onClick={()=>setCheck(!check)}type="checkbox" checked={check} />{element}</li>
      ))}

    </ul>
  </div>
  );}

export default App
