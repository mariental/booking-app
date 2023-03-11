import { ExpandMore } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export interface ReservationProps { }

export function Reservation(props: ReservationProps) {
  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', my: 6, display: 'flex' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="Podsumownie rezerwacji"
            />
            <CardContent>
              <Stack>

              </Stack>
              <Divider variant="middle"/>
              <Stack>
                
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>

  );
}

export default Reservation;
