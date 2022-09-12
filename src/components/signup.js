import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography,Link, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Checkbox from '@mui/material/Checkbox';

import axios from "axios"
// import { useNavigate } from "react-router-dom"

const Signup = () => {
// state code
// const navigate = useNavigate()

const [ user, setUser] = useState({
    name: "",
    password:"",
    reEnterPassword: ""
})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const signup = () => {
    const { name,password, reEnterPassword } = user
    if( name && password && (password === reEnterPassword)){
        axios.post("http://localhost:9002/signup", user)
        .then( (res) => {
            {
                alert(res.data.message);
                // navigate.push("/login")
            }
        })
    } else {
        alert("invalid input")
    }
}








    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    // const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField name="name" value={user.name}  onChange={ handleChange } variant='standard' fullWidth label='Name' placeholder="Enter your email" />
                    <TextField name="password" value={user.password}  onChange={ handleChange } variant='standard' fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField name="reEnterPassword" value={user.reEnterPassword}  onChange={ handleChange } variant='standard' fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                   
                    <Button onClick={signup} type='submit' variant='contained' color='primary' style={btnstyle}>Sign up</Button>
                    <Typography > Do you have an account ?
                {/* <Link href="/login" onClick={() => navigate.push("/login")} >
                    Log In
                </Link> */}
            </Typography>
                    {/* <Button onClick={() => navigate.push("/login")}>Login</Button> */}
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;