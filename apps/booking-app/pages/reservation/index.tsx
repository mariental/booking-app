import * as React from 'react';
import { ExpandMore } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Divider, FormControl, Grid, IconButton, InputLabel, Link, MenuItem, Rating, Stack, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface ReservationProps { }

const steps = [
  'Twój wybór',
  'Twoje dane',
  'Ostatni krok',
];

export function Reservation(props: ReservationProps) {
  const [hour, sethour] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    sethour(event.target.value as string);
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
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="Podsumownie rezerwacji"
            />
            <CardContent>
              <Stack spacing={2}>
                <Stack spacing={2} sx={{ border: 1, borderRadius: 1, borderColor: "lightgray", p: 1 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Stack>
                      <Typography>Zameldowanie</Typography>
                      <Typography color="text.secondary">sob. 22 kwi. 2023</Typography>
                      <Typography variant="caption" color="text.secondary">Do 11:00</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack>
                      <Typography>Wymeldowanie</Typography>
                      <Typography color="text.secondary">nd. 23 kwi. 2023</Typography>
                      <Typography variant="caption" color="text.secondary">Od 16:00</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Długość pobytu</Typography>
                    <Typography color="text.secondary">1 noc</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h6">
                  Szczegóły ceny
                </Typography>
                <Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Pokój i oferta:</Typography>
                    <Typography fontWeight={600}> 319,44 zł </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>8 % VAT:</Typography>
                    <Typography fontWeight={600}>25,56 zł</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Podatek miejski:</Typography>
                    <Typography fontWeight={600}>3,20 zł</Typography>
                  </Stack>
                  <Divider sx={{ my: 1, borderWidth: 1, borderColor: '#2f5785' }}/>
                  <Stack direction="row" justifyContent="space-between" sx={{ my: 1 }}>
                    <Typography variant="h6" color="primary" fontWeight={600}>Cena:</Typography>
                    <Typography variant="h6" color="primary" fontWeight={600}>348,20 zł</Typography>
                  </Stack>                  
                  <Divider sx={{ my: 1, borderWidth: 1, borderColor: '#2f5785' }}/>
                  <Stack>
                    <Typography variant="caption" letterSpacing={0}>
                      Zaoszczędź co najmniej 10% na tej opcji zakwaterowania po zalogowaniu z Genius, programem lojalnościowym Booking.com.
                      &nbsp;<Link href="/login" underline="none">Przejdź do strony logowania</Link>
                    </Typography>
                  </Stack>
                </Stack>
                <Button variant="contained">Potwierdź rezerwację</Button>
                <Stack>
                  <Typography variant="caption" color="green">
                    Bezpłatne odwołanie do 18 kwi. do godziny 23:59&nbsp;<Typography variant="caption" fontWeight={600}>wraz ze zwrotem kosztów</Typography>
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Od 19 kwi. od godziny 00:00 345 zł
                  </Typography>
                </Stack>
                <Typography variant="caption" color="error">
                  <Typography variant="caption" fontWeight={600}>Dostępność w wybranym terminie spada:</Typography>
                  &nbsp;Rezerwujesz ostatni dostępny przez naszą stronę Pokój dwuosobowy z prywatną łazienką w obiekcie Centrum Bieszczad.
                </Typography>
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
                    Pokój dwuosobowy z prywatną łazienką
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <PlaceOutlinedIcon color="primary" />
                    <Typography>
                      Sundsvall, Szwecja
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
                  <Chip label="1 kuchnia" variant="filled" icon={<KitchenOutlinedIcon />} />
                  <Chip label="40 m2" variant="outlined" icon={<HeightOutlinedIcon />} />
                  <Chip label="3 łóżka" variant="filled" icon={<BedOutlinedIcon />} />
                </Stack>
                <Button variant="contained">Zmień wybór</Button>
              </Stack>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 250, maxHeight: 180 }}
              image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="Dom"
            />
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <Typography variant="h6">
                  Wpisz swoje dane
                </Typography>
                <Stack direction="row" spacing={2}>
                  <TextField id="firstName" label="Imię" variant="outlined" size="small" fullWidth />
                  <TextField id="outlined-basic" label="Nazwisko" variant="outlined" size="small" fullWidth />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <TextField id="outlined-basic" label="Adres email" variant="outlined" size="small" fullWidth />
                  <TextField id="outlined-basic" label="Potwierdź adres email" variant="outlined" size="small" fullWidth />
                </Stack>
                <Stack>
                  <Typography variant="h6">
                    Godzina przyjazdu
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Możesz zameldować się między 08:00 a 11:00
                  </Typography>
                </Stack>
                <Box sx={{ maxWidth: 320 }}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">Dodaj planowaną godzinę przyjazdu</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={hour}
                      label="Dodaj planowaną godzinę przyjazdu"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>8.00 - 8.30</MenuItem>
                      <MenuItem value={2}>8.30 - 9.00</MenuItem>
                      <MenuItem value={3}>9.30 - 10.00</MenuItem>
                      <MenuItem value={4}>10.30 - 11.00</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Stack>
                  <Typography variant="h6">
                    Życzenia specjalne
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Realizacja życzeń specjalnych nie jest gwarantowana, ale obiekt postara się spełnić Twoją prośbę. Zawsze możesz dodać życzenie specjalne po sfinalizowaniu rezerwacji!
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Wpisz swoje życzenia (opcjonalnie)"
                    multiline
                    rows={2}
                    sx={{ mt: 2 }}
                  />
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
