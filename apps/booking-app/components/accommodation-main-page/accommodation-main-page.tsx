import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Accommodation } from 'apps/booking-app/accomondations';

export interface AccommodationMainPageProps {
  accomondation: Accommodation;
}

export function AccommodationMainPage(props: AccommodationMainPageProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={props.accomondation.mainImage.src}
        title={props.accomondation.mainImage.title}
      />
      <CardContent>
        <Rating name="read-only" size="small" value={props.accomondation.rate} precision={0.5} readOnly />
        <Typography gutterBottom variant="h5" component="div">
          {props.accomondation.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.accomondation.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ceny od {props.accomondation.price} PLN
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" href={`/accomondation-details/${props.accomondation.id}`}>Zobacz szczegóły</Button>
      </CardActions>
    </Card>
  );
}

export default AccommodationMainPage;
