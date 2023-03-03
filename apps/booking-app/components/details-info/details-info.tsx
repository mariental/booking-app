import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import GeneralReviews from 'apps/booking-app/components/general-reviews/general-reviews';
import { Image, Accommodation } from 'apps/booking-app/accomondations';

export interface DetailsInfoProps { 
  currentAccommodation: Accommodation;
}

export function DetailsInfo(props: DetailsInfoProps) {
  return (
    <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 1, md: 12 }}>
      <Grid item xs={1} md={5}>
        <Grid container maxWidth="sm" spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4 }}>
          {props.currentAccommodation.images.map((item: Image) => (
            <Grid item xs={1} sm={2} key={item.id}>
              <Box
                sx={{
                  height: 350,
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: 'cover'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1} md={7}>
        <Box>
          <Typography variant="h4" gutterBottom>
            {props.currentAccommodation.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {props.currentAccommodation.location} | {props.currentAccommodation.price} PLN
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.currentAccommodation.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            {props.currentAccommodation.facilities.map((item) =>
              <Chip label={item} variant="outlined" />
            )}
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Grid container maxWidth="sm" spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4 }}>
            <Grid item xs={1} sm={2}>
              <GeneralReviews />
            </Grid>
            <Grid item xs={1} sm={2}>

            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DetailsInfo;
