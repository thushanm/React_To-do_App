
import {TodoFrom} from "./component/TodoFrom.jsx";
import {TodoList} from "./component/TodoList.jsx";
import {useState} from "react";



function App() {

const [todos,setTodos] = useState([


        { id: 1, title: "sd", isComplete: true },
        { id: 2, title: "sddsd", isComplete: false},
        { id: 3, title: "sdsd", isComplete: true },
        { id: 4, title: "sdsd", isComplete: true},



]);


    const checkTodo = (id)=>{
        setTodos(todos.map(toto=>{
          if (toto.id === id)  toto.isComplete=!toto.isComplete
            console.log(toto.isComplete)
            console.log(id)
            return toto;
        }))

    }
    const deleteTodo = (id) =>{
setTodos(todos.filter((todos)=>todos.id !== id))
        console.log("ID Is: "+id)



    }
    const addButton =(text)=>{
const newTodo = {
    id:2,
    title:text,
    isComplete:false,
};
setTodos([...todos,newTodo])

    }
  return (
<div>
 <TodoFrom addButton={addButton}/>
<TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>

</div>
  )
}

export default App
