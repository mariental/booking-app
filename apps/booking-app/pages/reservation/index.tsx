import * as React from 'react';
import { ExpandMore } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Divider, FormControl, Grid, IconButton, InputLabel, Link, MenuItem, Rating, Stack, Step, StepLabel, Stepper, styled, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router';

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
  const [lengthError, setLengthError] = React.useState<boolean>(false)
  const [emailMatchError, setEmailMatchError] = React.useState<boolean>(false)

  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      firstName: event.target.value
    });
    validateData();
  }
  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      lastName: event.target.value
    });
    validateData();
  }
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      email: event.target.value
    });
    validateData();
  }
  const handleChangeEmailConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({
      ...reservationData,
      emailConfirm: event.target.value
    });
    validateData();
  }

  const validateData = () => {
    if (reservationData.firstName.length !== 0 && reservationData.lastName.length !== 0 && reservationData.email.length !== 0 && reservationData.emailConfirm.length !== 0) {
      setLengthError(false);
    } else {
      setLengthError(true);
    }
    if (reservationData.email !== reservationData.emailConfirm) {
      setEmailMatchError(true);
    } else {
      setEmailMatchError(false);
    }
  }

  const handleClick = () => {
    validateData();
  }

  const router = useRouter();

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
                      <Typography color="text.secondary">sob. 22 kwi. 2023</Typography>
                      <Typography variant="caption" color="text.secondary">Do 11:00</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack>
                      <Typography fontWeight={600}>Wymeldowanie</Typography>
                      <Typography color="text.secondary">nd. 23 kwi. 2023</Typography>
                      <Typography variant="caption" color="text.secondary">Od 16:00</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={600}>Długość pobytu</Typography>
                    <Typography color="text.secondary">1 noc</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h5" >
                  Szczegóły ceny
                </Typography>
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Pokój i oferta:</Typography>
                    <Typography> 712 zł </Typography>
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
                    <Typography variant="h5" color="primary" fontWeight={600}>740 zł</Typography>
                  </Stack>
                </Stack>
                <Button variant="contained" size='large' color="secondary" sx={{ height: 56 }} onClick={handleClick}>Potwierdź rezerwację</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1} md={9}>
          <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: "space-between" }}>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography variant="body2" color="text.secondary">Wybrana opcja:</Typography>
                  <Typography component="div" variant="h5">
                    Pokój dwuosobowy
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <PlaceOutlinedIcon color="primary" />
                    <Typography color="text.secondary">
                      Klimatyczny hotel | Sztokholm, Szwecja
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                  <Rating value={4.5} precision={0.1} readOnly />
                  <Typography variant="h6">
                    4.5
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                  <Chip label="1 łazienka" variant="outlined" icon={<BathtubOutlinedIcon />} />
                  <Chip label="20 m2" variant="outlined" icon={<HeightOutlinedIcon />} />
                  <Chip label="1 łóżko" variant="filled" icon={<BedOutlinedIcon />} />
                </Stack>
                <Button variant="contained" onClick={() => router.back()}>Zmień wybór</Button>
              </Stack>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 250, maxHeight: 180 }}
              image="https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Dom"
            />
          </Card>
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
                  <CustomTextField id="firstName" label="Imię" variant="outlined" name="firstName" type="text" value={reservationData.firstName} onChange={handleChangeFirstName} fullWidth required />
                  <CustomTextField id="outlined-basic" label="Nazwisko" variant="outlined" name="lastName" type="text" value={reservationData.lastName} onChange={handleChangeLastName} fullWidth required />
                </Stack>
                <Stack direction="row" spacing={4}>
                  <CustomTextField id="outlined-basic" label="Adres email" variant="outlined" name="email" type="email" value={reservationData.email} onChange={handleChangeEmail} fullWidth required />
                  <CustomTextField id="outlined-basic" label="Potwierdź adres email" variant="outlined" name="emailConfirm" type="email" value={reservationData.emailConfirm} onChange={handleChangeEmailConfirm} fullWidth required />
                </Stack>
              </Box>
              <Stack sx={{ mt: 2 }} spacing={2}>
                {lengthError ? <Alert severity="error">Wypełnij wymagane pola</Alert> : <></>}
                {emailMatchError ? <Alert severity="error">Podane adresy email nie są takie same</Alert> : <></>}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container >

  );
}

export default Reservation;
