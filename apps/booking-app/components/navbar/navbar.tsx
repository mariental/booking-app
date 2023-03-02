import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export interface NavbarProps { }

export function Navbar(props: NavbarProps) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Booking-app
          </Typography>
          <Button color="inherit">Zaloguj się</Button>
          <Button color="inherit">Zarejestruj się</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
