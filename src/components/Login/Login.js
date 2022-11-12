import { Grid, Paper, TextField, Button } from '@mui/material';
import React from 'react';

function Login() {
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
          Sign In
          <form>
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
              Sign In
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
