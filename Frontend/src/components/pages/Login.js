import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router";



const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    
    if(!email){
        console.log("click1");
        
        toast.info("Please Enter Email")
    }
    else if(!password){
        toast.info("Please Enter the password")
    }
    else if(email==='user@gmail.com' && password==='1'){
        navigate('/user', { state: { flag: true } })
    }
    else{
      toast.error("Invalid Credintals")

    }

  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignIn}
      >
        Sign In
      </Button>
      <ToastContainer />
    </Container>
  );
};

export default Login;
