import {Card, CardContent, Container, IconButton, Typography} from "@mui/material";
import {Check,Delete} from "@mui/icons-material"

export function Todo(){
    return(<Container>

<Card variant="outlined" style={{marginTop:35,background:"lightgray"}}>
<CardContent>

    <Typography variant="h5" component="h2">
<IconButton>
<Check style={{color:"blue"}}/>
</IconButton>
        <IconButton style={{float:"right"}}>
<Delete style={{color:"red"}}/>
</IconButton>
    </Typography>
</CardContent>
</Card>
    </Container>)
}