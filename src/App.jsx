
import {TodoFrom} from "./component/TodoFrom.jsx";
import {TodoList} from "./component/TodoList.jsx";
import {useState} from "react";
import {v4} from "uuid";



function App() {

const [todos,setTodos] = useState([






]);


    const checkTodo = (id)=>{
        setTodos(todos.map(toto=>{
          if (toto.id === id)
          {
              toto.isComplete = ! toto.isComplete
          }

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
    id:v4(),
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
