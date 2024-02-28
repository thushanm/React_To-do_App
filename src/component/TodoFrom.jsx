import React, {useState} from 'react';
import {FormControl, Container, TextField, Button} from '@mui/material';
import {Add} from "@mui/icons-material";

export function TodoFrom({addButton}) {
    const [text,setText] =useState("")
    const handelSubmit =(e)=>{
        e.preventDefault()
        addButton(text);
    }
    return (
        <Container maxWidth="sm">
            <h1 style={{display:"flex",justifyContent:"center",color:"red"}}>JTM TODO APP</h1>
            <form onSubmit={handelSubmit}>

<FormControl fullWidth={true}>
    <TextField label="I Will Do This" required={true} value={text} onChange={(e)=>setText(e.target.value)} variant="standard"/>

    <Button variant="contained" style={{marginTop:5}} type="submit" >{<Add/>}Add</Button>

</FormControl>

            </form>
        </Container>
    );
}

