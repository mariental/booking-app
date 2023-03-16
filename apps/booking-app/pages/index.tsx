import * as React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import SearchBar from '../components/search-bar/search-bar';
import mainImage from '../public/main.jpg';

export function Index() {
  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', mt: 5}}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }} columns={{ xs: 1, md: 12 }}>
        <Grid item xs={1} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Stack mb={3} spacing={2} marginBottom={7}>
            <Typography variant="h3" fontWeight={700} color="primary">Znajdź miejsce na kolejny pobyt</Typography>
            <Typography variant="h4" color="text.secondary">Szukaj ofert hoteli, domów i wielu innych obiektów...</Typography>
          </Stack>
          <SearchBar />
        </Grid>
        <Grid item xs={1} md={5}>
          <Box
            component="img"
            sx={{
              display: 'block',
              height: 'auto',
              maxWidth: { xs: '100%', md: '100%' },
              margin: '0 auto',
              borderRadius: 4,
              opacity: 0.9
            }}
            alt="Image with hotel sign."
            src={mainImage.src}
          />
        </Grid>
      </Grid>
      {/*<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
        {accommodation.map((item) =>
          <Grid item xs={1} sm={2} md={3} key={item.id}>
            <AccommodationMainPage accomondation={item} />
          </Grid>
        )}
        </Grid>*/}
    </Container>
  );
}

export default Index;
