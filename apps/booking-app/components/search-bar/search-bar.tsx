import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Search } from '@mui/icons-material';
import { TextField, Button, ButtonGroup, Fade, Popper, PopperPlacementType, Stack, Typography, ButtonProps, Autocomplete, InputAdornment } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface SearchBarProps { }

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 24,
  padding: 24,
  marginBottom: 24,
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
      border: `2px solid ${theme.palette.primary.light}`,
      borderRadius: 4
    },
    '&:hover fieldset': {
      borderColor: `${theme.palette.secondary.light}`,
    },
  }
}));

const CustomButton = styled(Button)(({ theme }) => ({
   border: `2px solid ${theme.palette.primary.light}`,
   '&:hover': {
    border: `2px solid ${theme.palette.secondary.light}`,
  },
  color: 'rgba(0, 0, 0, 0.6)',
  textTransform: 'none',
  fontSize: '1rem'
}));

const locations = [
  { label: 'Szwecja', year: 1994 },
  { label: 'Warszawa', year: 1972 },
  { label: 'Kraków', year: 1974 },
  { label: 'Zakopane', year: 2008 }
]

export function SearchBar(props: SearchBarProps) {
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
    <Item elevation={5}>
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
      <Autocomplete
        disablePortal
        id="chooseLocation"
        options={locations}
        sx={{ width: 280 }}
        renderInput={(params) => <CustomTextField {...params} label="Dokąd się wybierasz?" />}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Data zameldowania"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          inputFormat="DD-MM-YYYY"
          renderInput={(params) => <CustomTextField {...params} sx={{ width: 280 }} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Data wymeldowania"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          inputFormat="DD-MM-YYYY"
          renderInput={(params) => <CustomTextField {...params} sx={{ width: 280 }} />}
        />
      </LocalizationProvider>
      <CustomButton variant="outlined" onClick={handleClick('bottom')} endIcon={<ExpandMoreIcon />} sx={{ height: 56 }}>
        2 dorosłych &#x2022; 0 dzieci &#x2022; 1 pokój
      </CustomButton>
      <Button variant="contained" endIcon={<Search />} href="search-result" color='secondary' sx={{ width: 180, height: 56, fontSize: 16 }}>
        Wyszukaj
      </Button>
    </Item>
  );
}

export default SearchBar;
