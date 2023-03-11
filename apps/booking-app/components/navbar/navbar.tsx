import * as React from 'react';
import { Dayjs } from 'dayjs';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Search from '@mui/icons-material/Search';

export interface NavbarProps { }

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 10,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  flexWrap: 'wrap',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 100,
  },
}));

export function Navbar(props: NavbarProps) {
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <StyledToolbar>
          <Button variant="outlined" href='/'>Booking-app</Button>
          <Box component="div" sx={{ flexGrow: 1, alignSelf: 'flex-end', display: 'flex', justifyContent: 'center' }}>
            <Box
              component="form"
              sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Gdzie?" color="primary" variant="outlined" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Od kiedy?"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params}/>}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Do kiedy?"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                id="outlined-number"
                label="Liczba osób"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button variant="contained" endIcon={<Search />} href="search-result">
                Wyszukaj
              </Button>
            </Box>
          </Box>
          <Button variant="outlined" href='/login' >Zaloguj się</Button>
          <Button variant="outlined" href='/register'>Zarejestruj się</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
