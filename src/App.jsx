
import {TodoFrom} from "./component/TodoFrom.jsx";
import {TodoList} from "./component/TodoList.jsx";
import {useState} from "react";



function App() {

const [todos,setTodos] = useState([
    {
        id:1,
        title:"wwe",
        isComplete:false
    }, {
        id:2,
        title:"world",
        isComplete:false
    }, {
        id:3,
        title:"Heavy Waight",
        isComplete:false
    }

])
    const addButton =(text)=>{
    console.log(text)

    }
  return (
<div>
 <TodoFrom addButton={addButton}/>
<TodoList todos={todos}/>

</div>
  )
}

export default App
