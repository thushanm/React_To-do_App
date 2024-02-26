import {Container} from "@mui/material";
import {Todo} from "./Todo.jsx";

export function TodoList({todos}){
    return(<Container>
        {todos.map((p) => (
            <Todo key={p.id} title={p.title}/>
        ))}

    </Container>)

}