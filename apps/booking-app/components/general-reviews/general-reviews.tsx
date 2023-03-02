import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export interface GeneralReviewsProps { }

export function GeneralReviews(props: GeneralReviewsProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
          <Rating name="read-only" value={4} precision={0.5} sx={{ mr: 1 }} readOnly />
          <Typography variant='caption'>103 opinii</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Wynajęty dom był wspaniały! Był czysty i przestronny. Ogólnie rzecz biorąc, mieliśmy wspaniały czas i z pewnością polecam ten dom innym, którzy szukają pięknie urządzonego i komfortowego miejsca na wakacje.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Więcej opinii</Button>
      </CardActions>
    </Card>
  );
}

export default GeneralReviews;
