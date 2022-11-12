import { Grid, Paper, TextField, Button } from '@mui/material';
import React from 'react';

function SignUp() {
  const paperStyle = {
    padding: '30px 20px',
    width: 300,
    margin: '150px auto'
  };
  const formStyle = {
    marginTop: '10px'
  };
  return (
    <div>
      <Grid align='center'>
        <Paper elevation={20} style={paperStyle}>
          Sign Up
          <form>
            <TextField
              style={formStyle}
              variant='outlined'
              required
              fullWidth
              id='firstName'
              label='First Name'
              name='firstName'
              autoComplete='fname'
            />
            <TextField
              style={formStyle}
              variant='outlined'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
            />
            <TextField
              style={formStyle}
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
            <TextField
              style={formStyle}
              variant='outlined'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
          </form>
          <div>
            <Button style={formStyle} type='submit' fullWidth variant='contained' color='primary'>
              Sign Up
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
