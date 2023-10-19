import { Link } from "react-router-dom";
import { TaskList } from "./TaskList";
import {Home} from "./Home";
import {SobreNosotros} from "./SobreNosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Center} from "@chakra-ui/react";

export function Menu() {
  return (
    <div>
    <BrowserRouter>
    <Center bg='#0400ff' h='100px' color='white'>
    <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/tasks">TaskList</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
      </Center>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<SobreNosotros />} />
      <Route path="/tasks" element={<TaskList />} /> 
    </Routes>
    
 

  </BrowserRouter>
 
    </div>
  );
}

