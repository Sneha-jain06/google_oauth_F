import { LockClockOutlined } from '@mui/icons-material'
import {  Avatar, Grid, Paper, TextField, Button, Typography, Link } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
// import { useNavigate } from "react-router-dom"
const Login = ({setLoginUser}) => {
//state code
// const navigate = useNavigate()

const [ user, setUser] = useState({
    name: "",
    password:""
    
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
        // navigate.push("/")
    })
}




    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }


    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockClockOutlined /></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' name="name" value={user.name} placeholder='Enter username' variant='standard'onChange={ handleChange } fullWidth required />
            <TextField label='Password' name="password" value={user.password} placeholder='Enter password' type='password' variant='standard'onChange={ handleChange } fullWidth required />
           
            <Button onClick={login} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            
            <Typography > Do you have an account ?
                {/* <Button  onClick={() => navigate.push("/signup")} >
                    Sign Up
                </Button> */}
            </Typography>
        </Paper>
        </Grid >
    
        )

}
export default Login