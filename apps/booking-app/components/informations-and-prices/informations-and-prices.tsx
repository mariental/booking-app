import * as React from 'react';
import AccommondationRoom from '../accommondation-room/accommondation-room';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from 'apps/booking-app/store';
import { useRouter } from 'next/router';
import { setReservationInfo } from 'apps/booking-app/store/reservationSlice';
import { Divider } from '@mui/material';

export interface InformationsAndPricesProps {
  accommodation: any;
  searchParams: any;
}

export function InformationsAndPrices(props: InformationsAndPricesProps) {
  const [rooms, setRooms] = React.useState([]);

  const reservationRoomsNumber = useAppSelector(state => state.reservation.selectedOptions.length);
  const reservationPrice = useAppSelector((state) => state.reservation.totalPrice);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (reservationRoomsNumber > 0) {
      dispatch(setReservationInfo({
        destination: props.searchParams.location,
        checkInDate: props.searchParams.checkIn,
        checkOutDate: props.searchParams.checkOut,
        adults: props.searchParams.adults,
        kids: props.searchParams.kids,
        accommondationName: props.accommodation.name,
        accommondationAddress: props.accommodation.address.city.concat(", ", props.accommodation.address.country)
      }));
      router.push("/reservation");
    }
  }

  React.useEffect(() => {
    setRooms(props.accommodation.rooms);
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          {rooms.map(room =>
            <AccommondationRoom key={room.id} room={room} />
          )}
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              {reservationRoomsNumber !== 0 && reservationPrice !== 0 ?
                <>
                  <Typography variant="h5" mb={2}>
                    Pokój dwuosobowy z balkonem
                  </Typography>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" textAlign="center">
                      {reservationRoomsNumber} {reservationRoomsNumber === 1 ? 'pokój' : 'pokoje'}
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                      {reservationPrice} zł
                    </Typography>
                  </Stack>
                </> : <Typography variant="h5" textAlign="center">Wybierz jeden z pokoi</Typography>
              }
              {reservationRoomsNumber > 0 ? <Button variant="contained" size="large" endIcon={<SendIcon />} fullWidth sx={{ mt: 3, mb: 2 }} onClick={handleClick}>Rezerwuję</Button> : <Divider sx={{ my: 2}}></Divider>}
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
