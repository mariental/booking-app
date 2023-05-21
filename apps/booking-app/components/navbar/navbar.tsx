import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

export interface NavbarProps { }

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  flexWrap: 'wrap',
  '@media all': {
    minHeight: 60
  },
}));

export function Navbar(props: NavbarProps) {
  const router = useRouter();

  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const { data: session, status } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent' sx={{ boxShadow: 2, mb: 1 }}>
        <StyledToolbar>
          <Stack direction="row" justifyContent="center">
            <IconButton edge="start" color="primary" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Button variant="text" href='/' color='primary' startIcon={<TravelExploreOutlinedIcon />} size="large" sx={{ fontWeight: 700 }}>Booking-app</Button>
          </Stack>
          {
            session ?
              <Stack direction="row" spacing={1} justifyContent="center">
                <Button href='#' color='primary' disabled>{session.user.name} ({session.user.email})</Button>
                <Button variant="outlined" onClick={() => signOut()} color='primary'>Wyloguj się</Button>
              </Stack>
              :
              <Stack direction="row" spacing={1} justifyContent="center">
                <Button href='#' color='primary'>Udostępnij obiekt</Button>
                <Button variant="outlined" href='/login' color='primary'>Zaloguj się</Button>
                <Button variant="contained" href='/register' color='primary'>Zarejestruj się</Button>
              </Stack>
          }

        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
