import * as React from 'react';
import { Container, Grid } from '@mui/material';
import AccommodationMainPage from '../components/accommodation-main-page/accommodation-main-page';

export interface Accommodation {
    id: number,
    image: string;
    name: string;
    location: string;
    price: number;
    rate: number;
}

const accommodation = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    name: 'Skandynawski dom',
    location: 'Sundsvall, Szwecja',
    price: 850,
    rate: 4
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589129140837-67287c22521b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    name: 'Dom w górach',
    location: 'Sion, Szwajcaria',
    price: 850,
    rate: 5
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1574573146255-2670cff03427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    name: 'Leśna chata',
    location: 'Cisna, Polska',
    price: 850,
    rate: 4.5
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Dom nad morzem',
    location: 'Argos, Grecja',
    price: 850,
    rate: 4
  },
]

export function Index() {
  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', mt: 8 }}>
      <Grid container spacing={2}>
        {accommodation.map((item) => 
          <Grid item xs={3}>
            <AccommodationMainPage accomondation={item}/>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Index;
