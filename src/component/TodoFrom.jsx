import React from 'react';
import {FormControl, Container, TextField, Button} from '@mui/material';
import {Add} from "@mui/icons-material";

export function TodoFrom(props) {
    return (
        <Container maxWidth="sm">
            <h1 style={{display:"flex",justifyContent:"center",color:"red"}}>JTM TODO APP</h1>
            <form>

<FormControl fullWidth={true}>
    <TextField label="I Will Do This" required={true} variant="standard"/>

    <Button variant="contained" style={{marginTop:5}}>{<Add/>}Add</Button>

</FormControl>

            </form>
        </Container>
    );
}

