
import './App.css'
import Header from './components/Header'
import {TaskList} from './components/TaskList'

const ListaPendientes= [{name: "buy a new gaming laptop", estado: "completado"},
{name: "complete a previous task", estado: "completado"},
{name: "create a video for YouTube", estado: "pendiente"},
{name: "create a new portafolio site", estado: "completado"}]

function App() {

  return (
  <div>
    <Header/>
    <TaskList lista={ListaPendientes}/>
  </div>
  )
}

export default App
