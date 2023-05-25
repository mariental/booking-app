import React from "react";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, IconButton, Link, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography, useTheme } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'apps/booking-app/firebase/firebaseApp';

export interface DashboardProps { 
  setValue: Function;
}

export function Dashboard(props: DashboardProps) {
  const [reservations, setReservations] = React.useState();
  const [userData, setUserData] = React.useState(); 

  const [user, loading] = useAuthState(auth);
  const theme = useTheme();

  const getData = async (email: string) => {
    const resonse = await fetch(`/api/user/${email}`, {
      method: "GET",
    });
    return resonse.json();
  }

  React.useEffect(() => {
    if(user) {
      getData(user.email).then((data) => {
        setUserData(data);
        console.log(data);
      });
    }
  }, [])

  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', my: 2 }}>
      <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 1, md: 12 }} sx={{ justifyContent: 'center', position: 'relative', marginTop: 2 }}>
        <Grid item xs={1} md={3}>
          <Stack spacing={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }} aria-label="avatar">
                    {user.email.charAt(0)}
                  </Avatar>
                }
                title={userData ? userData.name : ""}
                subheader={<Link
                  component="button"
                  variant="body2"
                  onClick={() => { }}
                  sx={{ textDecoration: 'none' }}
                >
                  Edytuj profil
                </Link>}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<StarIcon  sx={{ color: theme.palette.secondary.main, width: 40, height: 40 }} fontSize="large"></StarIcon>}
                title="Ostatnie opinie"
                subheader={<Link
                  component="button"
                  variant="body2"
                  onClick={() => { props.setValue(1);  }}
                  sx={{ textDecoration: 'none' }}
                >
                  Zobacz więcej
                </Link>}
              />
              <CardContent sx={{ paddingY: 0 }}>
                <List sx={{ width: '100%', padding: 0 }}>
                  <ListItem alignItems="flex-start" sx={{ paddingX: 0 }}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start" sx={{ paddingX: 0 }}>
                    <ListItemAvatar>
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<FavoriteIcon color="error" fontSize="large"></FavoriteIcon>}
                title="Lista ulubionych"
                subheader={<Link
                  component="button"
                  variant="body2"
                  onClick={() => { props.setValue(2) }}
                  sx={{ textDecoration: 'none' }}
                >
                  Zobacz więcej
                </Link>}
              />
              <CardContent sx={{ paddingY: 0 }}>
                <List sx={{ width: '100%', padding: 0 }}>
                  <ListItem alignItems="flex-start" sx={{ paddingX: 0 }}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start" sx={{ paddingX: 0 }}>
                    <ListItemAvatar>
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Summer BBQ"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={1} md={8}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6">Ostatnie rezerwacje</Typography>
            {reservations ? 
            <Stack direction="row" spacing={2}>

            </Stack> 
            : <Button variant="contained" sx={{ mt: 2 }} fullWidth>Dodaj pierwszą rezerwację</Button>}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
