import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Search } from '@mui/icons-material';
import { TextField, Button, ButtonGroup, Fade, Popper, PopperPlacementType, Stack, Typography, ButtonProps, Autocomplete, InputAdornment } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import * as dayjs from 'dayjs';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 12,
  marginBottom: 24,
  gap: 24,
  padding: 24,
  flexWrap: 'wrap',
  '@media (max-width:600px)': {
    gap: 12,
  },
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  '&.Mui-disabled': {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.light}`,
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    '&:hover fieldset': {
      borderColor: `${theme.palette.secondary.light}`,
    },
    width: 260,
  }
}));

const CustomButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  '&:hover': {
    border: `2px solid ${theme.palette.secondary.light}`,
  },
  textTransform: 'none',
  fontSize: '1rem'
}));

const locations = [
  'Szwecja',
  'Polska',
]

interface GuestOptions {
  adults: number;
  kids: number;
  rooms: number;
}

export interface SearchBarHorizontalProps { 
  location?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  kids?: number;
  rooms?: number;
}

export function SearchBarHorizontal(props: SearchBarHorizontalProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [location, setLocation] = React.useState<string | null>(props.location !== undefined ? props.location : null);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(props.checkIn !== undefined ? dayjs(props.checkIn, 'DD-MM-YYYY') : null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(props.checkOut !== undefined ? dayjs(props.checkOut, 'DD-MM-YYYY') : null);
  const [guestOptions, setGuestOptions] = React.useState<GuestOptions>({
    adults: props.adults !== undefined ? props.adults : 1,
    kids: props.kids !== undefined ? props.kids : 0,
    rooms: props.rooms !== undefined ? props.rooms : 1
  });

  const router = useRouter()

  const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleSearch = () => {
    if(location !== null && startDate !== null && endDate !== null) {
      if(router.pathname === '/accomondation-details/[pid]'){

      } else {
        router.push(`/search-result?location=${location}&checkIn=${startDate.format('DD-MM-YYYY')}&checkOut=${endDate.format('DD-MM-YYYY')}&adults=${guestOptions.adults}&kids=${guestOptions.kids}&rooms=${guestOptions.rooms}`)
      }
    }
  }

  return (
    <Item elevation={3}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ minWidth: 250, mt: 1 }}>
              <Stack justifyContent="center" sx={{ p: 2 }} spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Dorośli</Typography>
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => {setGuestOptions({...guestOptions, adults: guestOptions.adults+1})}}>+</Button>
                    <ColorButton disabled>{guestOptions.adults}</ColorButton>
                    <Button onClick={() => {setGuestOptions({...guestOptions, adults: guestOptions.adults-1})}}>-</Button>
                  </ButtonGroup>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Dzieci</Typography>
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => {setGuestOptions({...guestOptions, kids: guestOptions.kids+1})}}>+</Button>
                    <ColorButton disabled>{guestOptions.kids}</ColorButton>
                    <Button onClick={() => {setGuestOptions({...guestOptions, kids: guestOptions.kids-1})}}>-</Button>
                  </ButtonGroup>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Pokoje</Typography>
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => {setGuestOptions({...guestOptions, rooms: guestOptions.rooms+1})}}>+</Button>
                    <ColorButton disabled>{guestOptions.rooms}</ColorButton>
                    <Button onClick={() => {setGuestOptions({...guestOptions, rooms: guestOptions.rooms-1})}}>-</Button>
                  </ButtonGroup>
                </Stack>
                <Button variant="contained">Gotowe</Button>
              </Stack>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Autocomplete
        disablePortal
        id="chooseLocation"
        options={locations}
        value={location}
        onChange={(event: any, newValue: string | null) => {
          setLocation(newValue);
        }}
        sx={{ width: 260 }}
        renderInput={(params) => <CustomTextField {...params} label="Miejsce docelowe"/>}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Data zameldowania"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          inputFormat="DD-MM-YYYY"
          minDate={dayjs()}
          renderInput={(params) => <CustomTextField {...params} />}
          disableHighlightToday
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Data wymeldowania"
          value={endDate}
          minDate={startDate === null ? dayjs().add(1, 'day') : startDate.add(1, 'day')}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          inputFormat="DD-MM-YYYY"
          renderInput={(params) => <CustomTextField {...params} />}
          disableHighlightToday
        />
      </LocalizationProvider>
      <CustomButton variant="outlined" onClick={handleClick('bottom')} endIcon={<ExpandMoreIcon />} sx={{ height: 56 }}>
        {guestOptions.adults} dorosłych &#x2022; {guestOptions.kids} dzieci &#x2022; {guestOptions.rooms} pokój
      </CustomButton>
      <Button variant="contained" endIcon={<Search />} 
        onClick={handleSearch} 
        color='secondary' sx={{ height: 56, fontSize: 16, width: 260 }}
        >
        Wyszukaj
      </Button>
    </Item>
  );
}

export default SearchBarHorizontal;
