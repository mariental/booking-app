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
import { validateCheckInDate, validateCheckOutDate, validateLocation } from 'apps/booking-app/tools/validators';

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

const Item2 = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
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
  'Szwecja'
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
  const [location, setLocation] = React.useState<string>(props.location !== undefined ? props.location : '');
  const [checkInDate, setCheckInDate] = React.useState<Dayjs | null>(props.checkIn !== undefined ? dayjs(props.checkIn, 'YYYY-MM-DD') : null);
  const [checkOutDate, setCheckOutDate] = React.useState<Dayjs | null>(props.checkOut !== undefined ? dayjs(props.checkOut, 'YYYY-MM-DD') : null);
  const [guestOptions, setGuestOptions] = React.useState<GuestOptions>({
    adults: props.adults !== undefined ? props.adults : 1,
    kids: props.kids !== undefined ? props.kids : 0,
    rooms: props.rooms !== undefined ? props.rooms : 1
  });

  const [locationError, setLocationError] = React.useState<boolean>(false);
  const [checkInDateError, setCheckInDateError] = React.useState<boolean>(false);
  const [checkOutDateError, setCheckOutDateError] = React.useState<boolean>(false);

  const router = useRouter()

  const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const validateData = () => {
    if (validateLocation(location)) {
      setLocationError(false)
    } else {
      setLocationError(true)
    }
    if (validateCheckInDate(checkInDate)) {
      setCheckInDateError(false)
    } else {
      setCheckInDateError(true)
    }
    if (validateCheckOutDate(checkOutDate)) {
      setCheckOutDateError(false)
    } else {
      setCheckOutDateError(true)
    }
  }

  const handleSearch = () => {
    if (validateLocation(location) && validateCheckInDate(checkInDate) && validateCheckOutDate(checkOutDate)) {
      router.push(`/search-result?location=${location}&checkIn=${checkInDate.format('YYYY-MM-DD')}&checkOut=${checkOutDate.format('YYYY-MM-DD')}&adults=${guestOptions.adults}&kids=${guestOptions.kids}&rooms=${guestOptions.rooms}`);
    } else {
      validateData();
    }
  }

  const content = () => {
    return (
      <>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper sx={{ minWidth: 250, mt: 1 }}>
                <Stack justifyContent="center" sx={{ p: 2 }} spacing={2}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography>Dorośli</Typography>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                      <Button onClick={() => {
                        if (guestOptions.adults < 10) {
                          setGuestOptions({ ...guestOptions, adults: guestOptions.adults + 1 })
                        }
                      }}>+</Button>
                      <ColorButton disabled>{guestOptions.adults}</ColorButton>
                      <Button onClick={() => {
                        if (guestOptions.adults > 1) {
                          setGuestOptions({ ...guestOptions, adults: guestOptions.adults - 1 })
                        }
                      }}>-</Button>
                    </ButtonGroup>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography>Dzieci</Typography>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                      <Button onClick={() => {
                        if (guestOptions.kids < 10) {
                          setGuestOptions({ ...guestOptions, kids: guestOptions.kids + 1 })
                        }
                      }}>+</Button>
                      <ColorButton disabled>{guestOptions.kids}</ColorButton>
                      <Button onClick={() => {
                        if (guestOptions.kids > 0) {
                          setGuestOptions({ ...guestOptions, kids: guestOptions.kids - 1 })
                        }
                      }}>-</Button>
                    </ButtonGroup>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography>Pokoje</Typography>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                      <Button onClick={() => {
                        if (guestOptions.rooms < 10) {
                          setGuestOptions({ ...guestOptions, rooms: guestOptions.rooms + 1 })
                        }
                      }}>+</Button>
                      <ColorButton disabled>{guestOptions.rooms}</ColorButton>
                      <Button onClick={() => {
                        if (guestOptions.rooms > 1) {
                          setGuestOptions({ ...guestOptions, rooms: guestOptions.rooms - 1 })
                        }
                      }}>-</Button>
                    </ButtonGroup>
                  </Stack>
                  <Button variant="contained" onClick={handleClick('bottom')}>Gotowe</Button>
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
            if (validateLocation(newValue)) {
              setLocationError(false)
            } else {
              setLocationError(true)
            }
          }}
          sx={{ width: 260 }}
          renderInput={(params) => <CustomTextField {...params} label="Miejsce docelowe" error={locationError} helperText={locationError ? "Podaj miejsce docelowe" : ""} />}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data zameldowania"
            value={checkInDate}
            onChange={(newValue) => {
              setCheckInDate(newValue);
              if (validateCheckInDate(newValue)) {
                setCheckInDateError(false)
              } else {
                setCheckInDateError(true)
              }
            }}
            inputFormat="YYYY-MM-DD"
            minDate={dayjs()}
            renderInput={(params) => <CustomTextField {...params} error={checkInDateError} helperText={checkInDateError ? "Podaj datę zameldowania" : ""} />}
            disableHighlightToday
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data wymeldowania"
            value={checkOutDate}
            minDate={checkInDate === null ? dayjs().add(1, 'day') : checkInDate.add(1, 'day')}
            onChange={(newValue) => {
              setCheckOutDate(newValue);
              if (validateCheckOutDate(newValue)) {
                setCheckOutDateError(false)
              } else {
                setCheckOutDateError(true)
              }
            }}
            inputFormat="YYYY-MM-DD"
            renderInput={(params) => <CustomTextField {...params} error={checkOutDateError} helperText={checkOutDateError ? "Podaj datę wymeldowania" : ""} />}
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
      </>
    )
  }

  return (
    <>
      {router.pathname === '/accomondation-details/[pid]' ?
        <Item2 elevation={0}>
          {content()}
        </Item2>
        :
        <Item elevation={3}>
          {content()}
        </Item>
      }
    </>
  );
}

export default SearchBarHorizontal;
