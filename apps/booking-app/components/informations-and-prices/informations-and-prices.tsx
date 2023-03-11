import * as React from 'react';
import AccommondationRoom from '../accommondation-room/accommondation-room';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import SendIcon from '@mui/icons-material/Send';

export interface InformationsAndPricesProps { }


const facilities = [
  '1 domek na wyłączność',
  '70 m²',
  'Prywatna kuchnia',
  'prywatna łazienka',
  'widok na ogród',
  'widok na góry',
  'zmywarka',
  'telewizor z płaskim ekranem',
  'taras',
  'ekspres do kawy',
]

const moreFacilties = [
  'toaleta', 'sofa', 'wanna lub prysznic', 'ręczniki', 'pościel', 'środki czystości', 'przyjazny alergikom', 'prywatne wejście', 'telewizor', 'lodówka', 'moskitiera', 'kuchenka mikrofalowa', 'ogrzewanie', 'suszarka do włosów', 'przybory kuchenne', 'aneks kuchenny', 'długie łóżka (> 2 metry)', 'czajnik elektryczny', 'meble ogrodowe', 'stół na świeżym powietrzu', ' szafa lub garderoba', 'płyta kuchenna', 'stół', 'całość zlokalizowana na parterze', 'wieszak na ubrania', 'papier toaletowy', 'rozkładana sofa', 'żel antybakteryjny'
]

const beds = [{ type: 'podwójne', quantity: 1 }]
const beds2 = [{ type: 'podwójne', quantity: 1 }, { type: 'pojedyncze', quantity: 2 }]

const reservationDetails = []

const name = 'Pokój Dwuosobowy z balkonem'

export function InformationsAndPrices(props: InformationsAndPricesProps) {
  const [reservationRoomsNumber, setReservationRoomsNumber] = React.useState(2)
  const [reservationPrice, setreservationPrice] = React.useState(472)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <AccommondationRoom name={name} facilities={facilities} moreFacilties={moreFacilties} beds={beds} />
          <AccommondationRoom name={name} facilities={facilities} moreFacilties={moreFacilties} beds={beds2} />
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" textAlign="center">
                  {reservationRoomsNumber} {reservationRoomsNumber === 1 ? 'pokój' : 'pokoje'}
                </Typography>
                <Typography variant="h5" textAlign="center">
                  {reservationPrice} zł
                </Typography>
              </Stack>
              <Button variant="contained" size="large" endIcon={<SendIcon />} fullWidth sx={{ mt: 3, mb: 2}} href="/reservation">Rezerwuję</Button>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 25 }}>
                    <CircleOutlinedIcon fontSize='inherit' />
                  </ListItemIcon>
                  <ListItemText
                    secondary="Cena zawiera opłaty i podatki"
                  />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 25 }}>
                    <CircleOutlinedIcon fontSize='inherit' />
                  </ListItemIcon>
                  <ListItemText
                    secondary="Natychmiastowe potwierdzenie"
                  />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 25 }}>
                    <CircleOutlinedIcon fontSize='inherit' />
                  </ListItemIcon>
                  <ListItemText
                    secondary="Brak opłat rezerwacyjnych i prowizji za płatność kartą kredytową!"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InformationsAndPrices;
