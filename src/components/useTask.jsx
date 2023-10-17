import { useState, useEffect } from "react";

export function useTask (){
    const [listTasks, setListTasks] = useState([]);
    
    function handleAddTask(task, desc) {
      let newTask = {
        id: Date(),
        name: task,
        desc: desc,
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

    function handleDeleteButton (id) {
      const newArray= listTasks.filter(e => e.id !== id )
      setListTasks([...newArray]) 
      let newListTask = [...newArray];
      newListTask = [...newArray];
      setListTasks(newArray);
      localStorage.setItem("listTasks", JSON.stringify(newArray))
    }


    // function handleChangeTodo(nextTodo) {
    //   const todo = todos.find(t =>
    //     t.id === nextTodo.id
    //   );
    //   todo.title = nextTodo.title;
    //   todo.done = nextTodo.done;
    // }
    return { listTasks, handleAddTask, handleDeleteButton }
}


// function hadleDelete(taskId) {
//   console.log(taskId);
//   const listaEliminada = list.filter((e)=>{
//     return e.id !== taskId})
//  localStorage.setItem("list", JSON.stringify(listaEliminada))
//  setList(listaEliminada)