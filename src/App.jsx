import "./App.css";
import Header from "./components/Header";
import { Menu } from "./components/Menu";
import { TaskList } from "./components/TaskList";




function App() {
  return (
    <div>
      <Menu/>
      <Header />
      <TaskList />
    </div>
  );
}
export default App;
