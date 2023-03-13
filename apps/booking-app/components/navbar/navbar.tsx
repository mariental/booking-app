import * as React from 'react';
import { Dayjs } from 'dayjs';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Search from '@mui/icons-material/Search';
import { ButtonGroup, Divider, Fade, Paper, Popper, PopperPlacementType, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

export interface NavbarProps { }

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  flexWrap: 'wrap',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 60,
  },
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.Mui-disabled': {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.light}`,
  },
}));

export function Navbar(props: NavbarProps) {
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ minWidth: 250, mt: 1 }}>
              <Stack justifyContent="center" sx={{ p: 2 }} spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Dorośli</Typography>
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>+</Button>
                    <ColorButton disabled>0</ColorButton>
                    <Button>-</Button>
                  </ButtonGroup>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Dzieci</Typography>
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>+</Button>
                    <ColorButton disabled>0</ColorButton>
                    <Button>-</Button>
                  </ButtonGroup>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Pokoje</Typography>
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>+</Button>
                    <ColorButton disabled>0</ColorButton>
                    <Button>-</Button>
                  </ButtonGroup>
                </Stack>
                <Button variant="contained">Gotowe</Button>
              </Stack>
            </Paper>
          </Fade>
        )}
      </Popper>
      <AppBar position="static" color='transparent' sx={{ boxShadow: 0 }}>
        <StyledToolbar>
          <Button variant="text" href='/' color='primary' startIcon={<TravelExploreOutlinedIcon />} size="large" sx={{ fontWeight: 700 }}>Booking-app</Button>
          {/*<Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="form"
              sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Gdzie?" variant="outlined" size="small" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Od kiedy?"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} size="small" />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Do kiedy?"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} size="small"/>}
                />
              </LocalizationProvider>
              <Button variant="outlined" onClick={handleClick('bottom')} endIcon={<ExpandMoreIcon />} color='inherit'>
                2 dorosłych &#x2022; 0 dzieci &#x2022; 1 pokój
              </Button>
              <Button variant="contained" endIcon={<Search />} href="search-result" size="small" color='secondary'>
                Wyszukaj
              </Button>
            </Box>
                </Box>*/}
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button variant="outlined" href='/login' color='primary'>Zaloguj się</Button>
            <Button variant="contained" href='/register' color='primary'>Zarejestruj się</Button>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
