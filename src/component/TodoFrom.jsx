import React from 'react';
import {FormControl, Container, TextField, Button} from '@mui/material';

export function TodoFrom(props) {
    return (
        <Container maxWidth="sm">
            <form>

<FormControl fullWidth={true}>
    <TextField label="I Will Do This" required={true} variant="standard"/>

    <Button variant="contained" style={{marginTop:5}}>Add Todo</Button>

</FormControl>

            </form>
        </Container>
    );
}

