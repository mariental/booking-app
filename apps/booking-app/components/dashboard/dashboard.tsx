import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'apps/booking-app/firebase/firebaseApp';
import UserReservation from '../user-reservation/user-reservation';
import CircularProgress from '@mui/material/CircularProgress';

export interface DashboardProps {
  setValue: Function;
}

export function Dashboard(props: DashboardProps) {
  const [reservations, setReservations] = React.useState(null);
  const [userData, setUserData] = React.useState(null);
  const [favorites, setFavorites] = React.useState(null);
  const [reviews, setReviews] = React.useState(null);
  const [dbUser, setDbUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  const [user] = useAuthState(auth);
  const theme = useTheme();

  const getUser = async (email: string) => {
    const resonse = await fetch(`/api/user/${email}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  const getReservations = async (id: number) => {
    const resonse = await fetch(`/api/reservation/${id}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  const getReviews = async (id: number) => {
    const resonse = await fetch(`/api/review/${id}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  React.useEffect(() => {
    if (user) {
      getUser(user.email).then((userData) => {
        setUserData(userData);
        getReservations(userData.id).then((reservations) => {
          setReservations(reservations);
          getReviews(userData.id).then((data) => {
            setReviews(data);
            setLoading(false);
          });
        });
      });
    }
  }, []);

  React.useEffect(() => {
    if (userData) {
      setFavorites(userData.favorites);
    }
  }, [userData]);

  if (loading) {
    return(
      <CircularProgress></CircularProgress>
    )
  } else {
    return (
      <Container maxWidth="xl" sx={{ mx: 'auto', my: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          columns={{ xs: 1, md: 12 }}
          sx={{ justifyContent: 'center', position: 'relative', marginTop: 2 }}
        >
          <Grid item xs={1} md={3}>
            <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: theme.palette.primary.main }}
                      aria-label="avatar"
                    >
                      {user.email.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={userData ? userData.name : ''}
                  subheader={
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {}}
                      sx={{ textDecoration: 'none' }}
                    >
                      Edytuj profil
                    </Link>
                  }
                />
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <StarIcon
                      sx={{
                        color: theme.palette.secondary.main,
                        width: 40,
                        height: 40,
                      }}
                      fontSize="large"
                    ></StarIcon>
                  }
                  title="Ostatnie opinie"
                  subheader={
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {
                        props.setValue(1);
                      }}
                      sx={{ textDecoration: 'none' }}
                    >
                      Zobacz więcej
                    </Link>
                  }
                />
                <CardContent sx={{ paddingY: 0 }}>
                  {reviews ? (
                    <List sx={{ width: '100%', padding: 0 }}>
                      {reviews.slice(0, 3).map((review) => (
                        <ListItem
                          key={review.id}
                          alignItems="flex-start"
                          sx={{ paddingX: 0 }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              sx={{
                                bgcolor: theme.palette.secondary.main,
                                color: 'black',
                                fontSize: 18,
                              }}
                              aria-label="avatar"
                            >
                              {review.rate}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={review.title}
                            secondary={review.content}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography>Brak opinii</Typography>
                  )}
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <FavoriteIcon color="error" fontSize="large"></FavoriteIcon>
                  }
                  title="Lista ulubionych"
                  subheader={
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {
                        props.setValue(2);
                      }}
                      sx={{ textDecoration: 'none' }}
                    >
                      Zobacz więcej
                    </Link>
                  }
                />
                <CardContent sx={{ paddingY: 0 }}>
                  {favorites ? (
                    <List sx={{ width: '100%', padding: 0 }}>
                      {favorites.slice(0, 3).map((favorite) => (
                        <ListItem
                          key={favorite.id}
                          alignItems="flex-start"
                          sx={{ paddingX: 0 }}
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt={favorite.images[0].alt}
                              src={favorite.images[0].src}
                            ></Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={favorite.name}
                            secondary={
                              favorite.address.country +
                              ', ' +
                              favorite.address.city
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography>Brak ulubionych</Typography>
                  )}
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={1} md={8}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h4" mb={3}>
                Ostatnie rezerwacje
              </Typography>
              {reservations ? (
                <Stack spacing={2}>
                  {reservations.map((reservation) => (
                    <UserReservation
                      key={reservation.id}
                      reservation={reservation}
                    />
                  ))}
                </Stack>
              ) : (
                <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                  Dodaj pierwszą rezerwację
                </Button>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
