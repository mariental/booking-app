import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Accommodation } from 'apps/booking-app/accomondations';
import { Box, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';

export interface AccommodationMainPageProps {
  accomondation: Accommodation;
}

const MyButton = styled(Button)({
  position: 'absolute',
  top: 15,
  left: 15,
  '&.MuiButton-root': {
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 600,
  }
});

const MyIconButton = styled(Button)({
  position: 'absolute',
  top: 15,
  left: 265,
  '&.MuiButton-root': {
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 600
  }
});


export function AccommodationMainPage(props: AccommodationMainPageProps) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          sx={{ height: 250 }}
          image={props.accomondation.mainImage.src}
          title={props.accomondation.mainImage.title}
        />
        <MyButton variant='contained' startIcon={<LocationOnOutlinedIcon />} disabled>
          {props.accomondation.location}
        </MyButton>
        <MyIconButton aria-label="add-to-favorite">
          <FavoriteBorderOutlinedIcon />
        </MyIconButton>
      </Box>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" component="div">
            {props.accomondation.name}
          </Typography>
          <Stack direction="row" alignItems="center">
            <StarIcon sx={{ color: 'rgb(250, 175, 0)'}}/>
            <Typography variant="body1">
              {props.accomondation.rate}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Ceny od {props.accomondation.price} PLN
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="medium" href={`/accomondation-details/${props.accomondation.id}`} variant="outlined">Zobacz szczegóły</Button>
      </CardActions>
    </Card>
  );
}

export default AccommodationMainPage;
