import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Stack } from '@mui/material';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }} className="container-custom">
      <Typography variant="h3" component="h1" gutterBottom className="header-custom">
        Welcome to URL Shortener
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="primary" as={Link} to="/signup" className="button-custom">
          Signup
        </Button>
        <Button variant="secondary" as={Link} to="/login" className="button-custom">
          Login
        </Button>
      </Stack>
    </Container>
  );
}

export default App;
