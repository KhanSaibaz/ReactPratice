import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!username) {
      toast.info("Please Enter Username");
    }
    if (!password) {
      toast.info("Please Enter the Password");
    }
    // alert(`Signing in with username: ${username} and password: ${password}`);
  };

  return (
    <div style={{ marginTop: "10rem" }}>
      <Container maxWidth="xs">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
    </div>
  );
};

export default Login;
