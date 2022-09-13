import { Grid, Paper,TextField,Button } from '@mui/material';
import React from 'react';


const Form=()=>{

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const btnstyle = { margin: '8px 0' }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                    {/* <Avatar style={avatarStyle}><LockClockOutlined /></Avatar> */}
                    <h2>Adding a sheet from subscription</h2>
                </Grid>

                <TextField label='sheetName' name="sheetName"  placeholder='Enter sheet name' variant='standard'  fullWidth required />
                <TextField label='tabName' name="tabName"  placeholder='Enter tab name' variant='standard'  fullWidth required />

                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Add Sheet</Button>
                
            </Paper>
        </Grid>

    )

};

export  default Form
