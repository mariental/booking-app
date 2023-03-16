import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import GeneralReviews from 'apps/booking-app/components/general-reviews/general-reviews';
import { Image, Accommodation } from 'apps/booking-app/accomondations';
import { Button, Rating, Stack } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import SmokeFreeOutlinedIcon from '@mui/icons-material/SmokeFreeOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarsIcon from '@mui/icons-material/Stars';

export interface DetailsInfoProps {
}

const currentAccommodation = {
  id: '2',
  mainImage: {
    id: '0',
    src: 'https://images.unsplash.com/photo-1659893167221-61537095b4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=604&q=80',
    title: 'Hotel'
  },
  images: [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1659893167221-61537095b4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=604&q=80',
      title: 'Hotel - wnętrze'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Hotel - wnętrze'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1623922939942-38c39476cbff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      title: 'Hotel- wnętrze'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Hotel - wnętrze'
    }
  ],
  name: 'Klimatyczny hotel',
  location: 'Sztokholm, Szwecja',
  price: 712,
  rate: 4.7,
  description: `Typowy hotel w Sztokholmie znajduje się w centrum miasta. Posiada tradycyjny skandynawski wystrój, z wygodnymi i przestronnymi pokojami gościnnymi wyposażonymi w udogodnienia, takie jak telewizor z płaskim ekranem, bezpłatny bezprzewodowy dostęp do Internetu oraz łazienkę z zestawem kosmetyków. \n\n Oferuje również pokoje o podwyższonym standardzie z takimi udogodnieniami, jak prywatny balkon z widokiem na miasto.Hotel posiada restaurację i bar serwujący dania kuchni lokalnej i międzynarodowej. Śniadanie może być wliczone w cenę pokoju lub oferowane za dodatkową opłatą. \n\n Ponadto hotel świadczy usługi, takie jak całodobowa recepcja, przechowalnia bagażu i pomoc konsjerża, aby pomóc gościom w jak najlepszym wykorzystaniu ich pobytu w Sztokholmie.`,
}

export function DetailsInfo(props: DetailsInfoProps) {
  return (
    <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 1, md: 12 }}>
      <Grid item xs={1} md={5}>
        <Grid container maxWidth="sm" spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4 }}>
          {currentAccommodation.images.map((item: Image) => (
            <Grid item xs={1} sm={2} key={item.id}>
              <Box
                sx={{
                  height: 320,
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </Grid>
          ))}
          <Button variant="outlined" fullWidth sx={{ mt: 2 }}>Więcej zdjęć</Button>
        </Grid>
      </Grid>
      <Grid item xs={1} md={7}>
        <Box>

          <Stack direction="row" alignContent="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography component="div" variant="h5">
                {currentAccommodation.name}
              </Typography>
              <ThumbUpIcon color='primary' />
              <StarsIcon color='primary' />
            </Stack>
            <Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Rating name="read-only" value={currentAccommodation.rate} precision={0.01} readOnly />
                <Typography variant="h5" color="primary">{currentAccommodation.rate}</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" alignContent="center">
            <LocationOnOutlinedIcon color='primary' />
            <Typography variant="h6" color="text.secondary" component="div">
              {currentAccommodation.location}
            </Typography>
          </Stack>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2, whiteSpace: 'pre-line' }}>
            {currentAccommodation.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
            <Chip label='Wi-Fi' variant="outlined" icon={<WifiOutlinedIcon />} />
            <Chip label='Zwierzęta są akceptowane' variant="outlined" icon={<PetsOutlinedIcon />} />
            <Chip label='Pokoje z balkonami' variant="outlined" icon={<BalconyOutlinedIcon />} />
            <Chip label='Całodobowa recepcja' variant="outlined" icon={<HotelOutlinedIcon />} />
            <Chip label='Dostęp za pomocą karty' variant="outlined" icon={<LockOutlinedIcon />} />
            <Chip label='Pokoje dla niepalących' variant="outlined" icon={<SmokeFreeOutlinedIcon />} />
          </Box>
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'end' }}>
          <Button variant='contained' color="secondary" size='large' fullWidth>Zarezerwuj teraz</Button>

        </Box>
      </Grid>
    </Grid>
  );
}

export default DetailsInfo;
