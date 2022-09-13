import { LockClockOutlined } from '@mui/icons-material'
import { Avatar, Grid, Paper, TextField, Button, Typography, Link, Stack } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Login = ({ setLoginUser }) => {
    //state code
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        password: ""

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)


                // navigate("/subscription");
            })
        

    }

    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }

    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }


    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockClockOutlined /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form>
                <TextField label='Username' name="name" value={user.name} placeholder='Enter username' variant='standard' onChange={handleChange} fullWidth required />
                <TextField label='Password' name="password" value={user.password} placeholder='Enter password' type='password' variant='standard' onChange={handleChange} fullWidth required />

                <Button onClick={login} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                <Stack direction={"row"} justifyContent={"center"} gap={1}>
                    <Typography > Do you have an account ?
                    </Typography>
                    <Typography onClick={() => { navigate("/") }} color={"primary"} style={{ cursor: "pointer" }}> SignUp
                    </Typography>
                </Stack>
                </form>
            </Paper>
        </Grid >

    )

}
export default Login