import {Card, CardContent, Container, IconButton, Typography} from "@mui/material";
import {Check,Delete} from "@mui/icons-material"

export function Todo({title,checkTodo,id,isComplete,deleteTodo}){
    const markComplete=()=> checkTodo(id);
    const todoStyle = isComplete
        ?{textDecoration:"line-through"} : {textDecoration:"none"};
    const delTodo = ()=> deleteTodo(id)
    return(<Container>

<Card variant="outlined" style={{marginTop:35,background:"lightgray"}}>
<CardContent>

    <Typography variant="h5" component="h2" style={todoStyle}>
<IconButton onClick={markComplete}>
<Check style={{color:"blue"}}/>
</IconButton>
        {title}
        <IconButton style={{float:"right"}} onClick={delTodo}>
<Delete style={{color:"red"}}/>
</IconButton>
    </Typography>
</CardContent>
</Card>
    </Container>)
}