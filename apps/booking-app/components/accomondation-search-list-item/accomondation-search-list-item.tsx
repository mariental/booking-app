import { useRouter } from 'next/router';
import { accommodation } from '../../accomondations';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export interface AccomondationSearchListItemProps {}

export function AccomondationSearchListItem(
  props: AccomondationSearchListItemProps
) {
  return (
    <Container maxWidth="xl" sx={{ mx: 'auto', mt: 8 }}>
      <Box maxWidth="md">
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {accommodation[1].name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {accommodation[1].description}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 250 }}
            image={accommodation[1].mainImage}
            alt="Live from space album cover"
          />
        </Card>
      </Box>
    </Container>
  );
}

export default AccomondationSearchListItem;
