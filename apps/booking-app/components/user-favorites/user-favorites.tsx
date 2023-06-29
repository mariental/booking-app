import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'apps/booking-app/firebase/firebaseApp';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Icon,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export interface UserFavoritesProps {}

export function UserFavorites(props: UserFavoritesProps) {
  const [userData, setUserData] = React.useState(null);
  const [favorites, setFavorites] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [user] = useAuthState(auth);

  const getUser = async (email: string) => {
    const resonse = await fetch(`/api/user/${email}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  React.useEffect(() => {
    if (user) {
      getUser(user.email).then((userData) => {
        setUserData(userData);
      });
    }
  }, []);

  React.useEffect(() => {
    if (userData) {
      console.log(userData.favorites);
      setFavorites(userData.favorites);
      setLoading(false);
    }
  }, [userData]);

  if (loading) {
    return <CircularProgress></CircularProgress>;
  } else {
    return (
      <Paper elevation={3} sx={{ padding: 3}}>
        {favorites ? (
          <Stack spacing={2} alignItems="center">
            {favorites.map((favorite) => (
              <Card
                sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, maxWidth: 550 }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    <Stack>
                      <Typography component="div" variant="h5">
                        {favorite.name}
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.5}
                        flexWrap="wrap"
                      >
                        <PlaceOutlinedIcon color="primary" />
                        <Typography color="text.secondary">
                          {favorite.address.country}, {favorite.address.city}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 450, maxHeight: 250 }}
                  image={favorite.images[0].src}
                  alt={favorite.images[0].alt}
                />
              </Card>
            ))}
          </Stack>
        ) : (
          <Typography>Brak ulubionych</Typography>
        )}
      </Paper>
    );
  }
}

export default UserFavorites;
