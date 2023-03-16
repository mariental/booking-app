import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IconButton, Stack} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

export interface NavbarProps { }

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  flexWrap: 'wrap',
  '@media all': {
    minHeight: 60
  },
}));

export function Navbar(props: NavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent' sx={{ boxShadow: 0 }}>
        <StyledToolbar>
          <Stack direction="row" justifyContent="center">
            <IconButton edge="start" color="primary" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Button variant="text" href='/' color='primary' startIcon={<TravelExploreOutlinedIcon />} size="large" sx={{ fontWeight: 700 }}>Booking-app</Button>
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button href='#' color='primary'>Udostępnij obiekt</Button>
            <Button variant="outlined" href='/login' color='primary'>Zaloguj się</Button>
            <Button variant="contained" href='/register' color='primary'>Zarejestruj się</Button>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
