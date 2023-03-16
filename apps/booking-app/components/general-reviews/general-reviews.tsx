import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';

export interface GeneralReviewsProps { }

export function GeneralReviews(props: GeneralReviewsProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', mb: 1  }}>
          <Avatar sx={{ mr: 1,  width: 28, height: 28}} aria-label="avatar">
            A
          </Avatar>
          <Typography variant='caption'>Anna, Polska</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Wynajęty dom był wspaniały! Był czysty i przestronny. Ogólnie rzecz biorąc, mieliśmy wspaniały czas i z pewnością polecam ten dom innym, którzy szukają pięknie urządzonego i komfortowego miejsca na wakacje.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'right'}}> 
        <Button size="small" variant='outlined'>Więcej opinii</Button>
      </CardActions>
    </Card>
  );
}

export default GeneralReviews;
