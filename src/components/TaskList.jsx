import { Task } from "./Task"
export const TaskList = (props) => {
    const {lista}=props
    return <div>
<ul>
    {lista.map((element) => ( <Task name= {element.name} estado= {element.estado}/>))}
  </ul>
 </div>}
