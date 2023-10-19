import "./App.css";
import Header from "./components/Header";
import { Menu } from "./components/Menu";
import { TaskList } from "./components/TaskList";
import { Button, useColorMode } from "@chakra-ui/react";



function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
  
<Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
<Header />
      <Menu/>
      
      {/* <TaskList /> */}
      
    </div>
  );
}
export default App;

