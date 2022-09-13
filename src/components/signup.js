import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import { Grid, Paper, Avatar, Typography,  TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Icon from './icon';
import { gapi } from "gapi-script";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Stack } from '@mui/system';
import {useEffect} from 'react'

const Signup = () => {
    // console.log("Signup Component")

    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: '105257939790-goroehlhhq5i1jr87oisje89ul867t02.apps.googleusercontent.com',
            scope: '',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);
    // state code
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const onSignupBtnClick = (e) => {
        e.preventDefault();
        console.log("res " + "res")
        const { name, password, reEnterPassword } = user
        if (name && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/signup", user)
                .then((res) => {
                    {
                        console.log("res " + res)
                        alert(res.data.message);
                        if (res.data.message !== "User already registered") {
                            navigate("/login")
                        }

                    }
                })
        } else {
            alert("invalid input")
        }
    }

    const googleSuccess = async (res) => {
     console.log(res); 
    
    }




    const googleError = (error) => 
    {console.log(error);
        alert('Google Sign In was unsuccessful. Try again later');}


    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

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
                    <TextField name="name" value={user.name} onChange={handleChange} variant='standard' fullWidth label='Name' placeholder="Enter your email" />
                    <TextField name="password" value={user.password} onChange={handleChange} variant='standard' fullWidth label='Password' placeholder="Enter your password" />
                    <TextField name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} variant='standard' fullWidth label='Confirm Password' placeholder="Confirm your password" />

                    <Button onClick={onSignupBtnClick} type='submit' variant='contained' color='primary' style={btnstyle}>Sign up</Button>
                    <Stack direction={"row"} justifyContent={"center"} gap={1}>
                        <Typography > Do you have an account ?
                        </Typography>
                        <Typography onClick= {()=>{navigate("/login")}} color={"primary"}  style={{cursor:"pointer"}}> Login
                        </Typography>
                    </Stack>
                    <GoogleLogin
            clientId="105257939790-goroehlhhq5i1jr87oisje89ul867t02.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button  
              color="primary" fullWidth onClick={renderProps.onClick} 
              disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />

                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;