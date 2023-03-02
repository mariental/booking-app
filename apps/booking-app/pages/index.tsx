import * as React from 'react';
import { Container, Grid } from '@mui/material';
import AccommodationMainPage from '../components/accommodation-main-page/accommodation-main-page';
import { accommodation } from '../accomondations';

export function Index() {
  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', mt: 8 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12}}>
        {accommodation.map((item) => 
          <Grid item xs={1} sm={2} md={3} key={item.id}>
            <AccommodationMainPage accomondation={item}/>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Index;
