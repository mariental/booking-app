import * as React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import mainImage from '../public/main.png';
import SearchBarHorizontal from '../components/search-bar-horizontal/search-bar-horizontal';

export function Index() {
  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', mt: 4 }}>
      <Stack sx={{ mb: 4 }}>
        <Typography variant="h3" textAlign="center" color='primary'>Znajdź miejsce na kolejny pobyt</Typography>
        <Typography variant="h6" textAlign="center" color='primary'>Szukaj ofert hoteli, domów i wielu innych obiektów...</Typography>
      </Stack>
      <SearchBarHorizontal />
      <Box
        component="img"
        sx={{
          display: 'block',
          height: 'auto',
          maxWidth: { xs: '100%', md: '60%' },
          margin: '0 auto',
          opacity: 0.8
        }}
        alt="The house from the offer."
        src={mainImage.src}
      />
    </Container>
  );
}

export default Index;
