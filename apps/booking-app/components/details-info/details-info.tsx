import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Button, Rating, Stack } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarsIcon from '@mui/icons-material/Stars';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Icon from '@mui/material/Icon';
import { useAppSelector } from 'apps/booking-app/store';
import { Accommodation } from 'apps/booking-app/store/accomondationSlice';

export interface DetailsInfoProps {
  accommodation: Accommodation;
}

export function DetailsInfo(props: DetailsInfoProps) {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, md: 12 }}>
      <Grid item xs={1} md={5}>
        <Stack direction="row" spacing={2} sx={{ mb: 1, width: '100%' }} >
          <Button endIcon={<FavoriteBorderOutlinedIcon />} color="error" variant="contained" fullWidth>Dodaj miejsce do ulubionych</Button>
          <Button variant="contained" endIcon={<CameraAltOutlinedIcon />} fullWidth>Więcej zdjęć</Button>
        </Stack>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4 }}>
          {props.accommodation.images.map(image => (
            <Grid item xs={1} sm={2} key={image.id}>
              <Box
                sx={{
                  height: 320,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ mt: 1, width: '100%' }} alignItems="end">
        </Stack>
      </Grid>
      <Grid item xs={1} md={7}>
        <Box>

          <Stack direction="row" alignContent="center" justifyContent="space-between">
            <Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography component="div" variant="h5">
                  {props.accommodation.name}
                </Typography>
                <StarsIcon color='primary' />
                <StarsIcon color='primary' />
                <StarsIcon color='primary' />
              </Stack>
              <Stack direction="row" alignItems="center">
                <LocationOnOutlinedIcon color='action' />
                <Typography variant="h6" color="text.secondary" component="div">
                  {props.accommodation.city}, {props.accommodation.country}
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Rating name="read-only" value={props.accommodation.ratings.find((item) => item.name === 'Overall').value} precision={0.01} readOnly />
                <Typography variant="h5" color="primary">{props.accommodation.ratings.find((item) => item.name === 'Overall').value}</Typography>
              </Stack>
              <Button variant='contained' size='small' endIcon={<ArrowForwardIosOutlinedIcon />}>Zobacz opinie</Button>
            </Stack>
          </Stack>
          <Stack boxShadow={2} padding={2} mt={3}>
            <Typography variant="subtitle2" gutterBottom sx={{ mt: 2, whiteSpace: 'pre-line' }} >
              {showMore ? props.accommodation.description : `${props.accommodation.description.substring(0, 295)}`}
            </Typography>
            <Button onClick={() => setShowMore(!showMore)} endIcon={showMore ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}>{showMore ? "Pokaż mniej" : "Pokaż więcej"}</Button>
          </Stack>
          <Stack boxShadow={2} padding={2} mt={3}>
            <Typography variant="h6" color="text.secondary">
              Udogodnienia:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
              {
                props.accommodation.facilities.map(facility =>
                  <Chip key={facility.id} label={facility.name} icon={<Icon>{facility.icon}</Icon>}></Chip>
                )}
              <Button variant='outlined' size='small' endIcon={<ArrowForwardIosOutlinedIcon />} sx={{ borderRadius: 24 }}>Zobacz więcej</Button>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'end' }}>
          <Button variant='contained' color="secondary" size='large' sx={{ height: 60 }} fullWidth>Wybierz pokój</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DetailsInfo;
