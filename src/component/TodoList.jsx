import {Container} from "@mui/material";
import {Todo} from "./Todo.jsx";

export function TodoList({todos,checkTodo,deleteTodo}){
    return(<Container>
        {todos.map((p) => (
            <Todo key={p.id} title={p.title}checkTodo={checkTodo}id={p.id}
                  isComplete={todos.isComplete}deleteTodo={deleteTodo}/>
        ))}

    </Container>)

}