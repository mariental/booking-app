import * as React from 'react';
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, Grid, Icon, IconButton, InputLabel, Link, MenuItem, Rating, Stack, Step, StepLabel, Stepper, styled, TextField, Typography } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'apps/booking-app/store';
import { calculateDuration } from 'apps/booking-app/components/guest-reviews/guest-reviews';
import { removeReservation } from 'apps/booking-app/store/reservationSlice';
import { validateConfirmEmail, validateEmail, validateFirstName, validateLastName } from 'apps/booking-app/tools/validators';

interface ReservationData {
  firstName: string;
  lastName: string;
  email: string;
  emailConfirm: string;
}

export interface ReservationProps { }

const steps = [
  'Twój wybór',
  'Twoje dane',
  'Ostatni krok',
];

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `1px solid ${theme.palette.primary.light}`,
    },
    '&:hover fieldset': {
      borderColor: `${theme.palette.secondary.light}`,
    },
  }
}));


export function Reservation(props: ReservationProps) {
  const [reservationData, setReservationData] = React.useState<ReservationData>({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: ''
  });
  const [firstNameError, setFirstNameError] = React.useState<boolean>(false);
  const [lastNameError, setLastNameError] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [confirmEmailError, setConfirmEmailError] = React.useState<boolean>(false);
  const [duration, setDuration] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const reservation = useAppSelector((state) => state.reservation);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [openProgress, setOpenProgress] = React.useState(false);
  const handleOpen = () => {
    setOpenProgress(true);
  };


  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      firstName: event.target.value
    });
    if(validateFirstName(event.target.value)) {
      setFirstNameError(false)
    } else {
      setFirstNameError(true)
    }
  }
  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      lastName: event.target.value
    });
    if (validateLastName( event.target.value)) {
      setLastNameError(false)
    } else {
      setLastNameError(true)
    }
  }
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      email: event.target.value
    });
    if (validateEmail( event.target.value)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }
  const handleChangeEmailConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      emailConfirm: event.target.value
    });
    if (validateConfirmEmail(reservationData.email, event.target.value)) {
      setConfirmEmailError(false)
    } else {
      setConfirmEmailError(true)
    }
  }

  

  const validateData = () => {
    if(validateFirstName(reservationData.firstName)) {
      setFirstNameError(false)
    } else {
      setFirstNameError(true)
    }
    if (validateLastName(reservationData.lastName)) {
      setLastNameError(false)
    } else {
      setLastNameError(true)
    }
    if (validateEmail(reservationData.email)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    if (validateConfirmEmail(reservationData.email, reservationData.emailConfirm)) {
      setConfirmEmailError(false)
    } else {
      setConfirmEmailError(true)
    }
  }

  React.useEffect(() => {
    setDuration(calculateDuration(reservation.checkInDate, reservation.checkOutDate));
  }, [])


  const handleClickOpen = () => {
    if(validateFirstName(reservationData.firstName) && validateLastName(reservationData.lastName) && validateEmail(reservationData.email) && validateConfirmEmail(reservationData.email, reservationData.emailConfirm)){
      setOpen(true);
    } else {
      validateData();
    }
  };

  const handleClose = async () => {
    setOpen(false);
    await dispatch(removeReservation());
    handleOpen();
    router.push("/")
  };

  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', my: 4, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', mb: 3 }}>
        <Stepper activeStep={1}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Grid container spacing={2} columns={{ xs: 1, md: 12 }}>
        <Grid item xs={1} md={3}>
          <Card>
            <CardHeader
              title="Podsumownie rezerwacji"
              titleTypographyProps={{ fontSize: 36 }}
            />
            <CardContent>
              <Stack spacing={2}>
                <Stack spacing={2} sx={{ border: 1, borderRadius: 1, borderColor: "lightgray", p: 1 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Stack>
                      <Typography fontWeight={600}>Zameldowanie</Typography>
                      <Typography color="text.secondary">{reservation.checkInDate}</Typography>
                      <Typography variant="caption" color="text.secondary">Do 11:00</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack>
                      <Typography fontWeight={600}>Wymeldowanie</Typography>
                      <Typography color="text.secondary">{reservation.checkOutDate}</Typography>
                      <Typography variant="caption" color="text.secondary">Od 16:00</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={600}>Długość pobytu</Typography>
                    <Typography color="text.secondary">{duration}</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h5" >
                  Szczegóły ceny
                </Typography>
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Pokój i oferta:</Typography>
                    <Typography> {reservation.totalPrice} zł </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>8 % VAT:</Typography>
                    <Typography> 24 zł</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Podatek miejski:</Typography>
                    <Typography>4 zł</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
                    <Typography variant="h5" color="primary" fontWeight={600}>Cena:</Typography>
                    <Typography variant="h5" color="primary" fontWeight={600}>{reservation.totalPrice + 24 + 4} zł</Typography>
                  </Stack>
                </Stack>
                <Button variant="contained" size='large' color="secondary" sx={{ height: 56 }} onClick={handleClickOpen}>Potwierdź rezerwację</Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Potwierdzenie rezerwacji"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Właśnie dokonałeś rezerwacji. Szczególy zostaną przesłane na podanego maila.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                  </DialogActions>
                </Dialog>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} md={9}>
          {reservation.selectedOptions.map(option =>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', mb: 2}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: "space-between" }}>
                <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
                  <Stack>
                    <Typography variant="body2" color="text.secondary">Wybrana opcja:</Typography>
                    <Typography component="div" variant="h5">
                      {option.room.name}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5} flexWrap="wrap">
                      <PlaceOutlinedIcon color="primary" />
                      <Typography color="text.secondary">
                        {reservation.accommondationName} | {reservation.accommondationAddress}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                  <Stack direction="row" flexWrap="wrap" my={1}>
                    {option.room.facilities.map(item =>
                      item.name === 'Powierzchnia' ?
                        <Chip key={item.id} label={option.room.size + "m2"} variant="outlined" icon={<Icon>{item.icon}</Icon>} sx={{ m: 0.5 }} />
                        : <Chip key={item.id} label={item.name} variant="outlined" icon={<Icon>{item.icon}</Icon>} sx={{ m: 0.5 }} />
                    )}
                  </Stack>
                </Stack>
                <Button variant="contained" onClick={() => router.back()}>Zmień wybór</Button>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 250, maxHeight: 180 }}
                image={option.room.images.find(image => image.mainImage === true).src}
                alt={option.room.images.find(image => image.mainImage === true).alt}
              />
            </Card>
          )}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                <Stack>
                  <Typography variant="h5">
                    Wpisz swoje dane
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Dane muszą należeć do osoby, która będzie meldować się w danym miejscu
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={4}>
                  <CustomTextField id="firstName" label="Imię" variant="outlined" name="firstName" type="text" error={firstNameError} helperText={firstNameError ? "Wpisz imię" : ""} value={reservationData.firstName} onChange={handleChangeFirstName} fullWidth required />
                  <CustomTextField id="outlined-basic" label="Nazwisko" variant="outlined" name="lastName" type="text" error={lastNameError} helperText={lastNameError ? "Wpisz nazwisko" : ""} value={reservationData.lastName} onChange={handleChangeLastName} fullWidth required />
                </Stack>
                <Stack direction="row" spacing={4}>
                  <CustomTextField id="outlined-basic" label="Adres email" variant="outlined" name="email" type="email" error={emailError} helperText={emailError ? "Wpisz email" : ""} value={reservationData.email} onChange={handleChangeEmail} fullWidth required />
                  <CustomTextField id="outlined-basic" label="Potwierdź adres email" variant="outlined" name="emailConfirm" type="email" error={confirmEmailError} helperText={confirmEmailError ? "Podane adresy różnią się" : ""} value={reservationData.emailConfirm} onChange={handleChangeEmailConfirm} fullWidth required />
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container >

  );
}

export default Reservation;
