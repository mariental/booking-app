import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarsIcon from '@mui/icons-material/Stars';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useRouter } from 'next/router';
import { SearchParams } from 'apps/booking-app/pages/search-result';


export interface AccomondationSearchListItemProps {
  accomondation: any;
  searchParams: SearchParams;
}

export function AccomondationSearchListItem(props: AccomondationSearchListItemProps) {

  return (
    <Card elevation={5} sx={{ width: 470, my: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 300 }}
        image={props.accomondation.images[0].src}
        alt={props.accomondation.images[0].alt}
      />
      <CardContent sx={{ paddingBottom: 0 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography component="div" variant="h6">
                {props.accomondation.name}
              </Typography>
              <ThumbUpIcon color='primary' />
              <StarsIcon color='primary' />
            </Stack>
            <Stack direction="row" alignItems="center" mb={2}>
              <LocationOnOutlinedIcon color="action" />
              <Typography variant="body1" color="text.secondary" component="div">
                {props.accomondation.address.city}, {props.accomondation.address.country}
              </Typography>
            </Stack>
          </Stack>

          <Stack alignItems="flex-end">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <StarIcon sx={{ color: '#faaf00' }} />
              <Typography variant="h5" color="primary">{props.accomondation.ratings.find((item) => item.name === 'Overall').value}</Typography>
            </Stack>
            <Typography variant="caption">({props.accomondation.ratings.find((item) => item.name === 'Overall').quantity} opinii)</Typography>
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignContent="end">
            <Typography color="text.secondary">Proponowana opcja:</Typography>
            <Typography>Apartament z balkonem</Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
            <Chip label="1 łóżko podwójne" variant="filled" icon={<KingBedOutlinedIcon />} />
            <Chip label="1 łazienka" variant="filled" icon={<BathtubOutlinedIcon />} />
            <Chip label="1 kuchnia" variant="filled" icon={<KitchenOutlinedIcon />} />
          </Stack>
        </Stack>
        <Stack mt={2}>
          <Typography variant="h5" color="primary.light" textAlign="end" fontWeight={600}>
            {props.accomondation.pricePerNight} PLN / noc
          </Typography>
          <Typography variant="caption" color="text.secondary" textAlign="end">
            Zawiera opłaty i podatki
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ padding: 0, mt: 2 }}>
        {props.searchParams !== null ?
          <Button variant='contained' href={`/accomondation-details/${props.accomondation.id}?location=${props.searchParams.location}&checkIn=${props.searchParams.checkIn}&checkOut=${props.searchParams.checkOut}&adults=${props.searchParams.adults}&kids=${props.searchParams.kids}&rooms=${props.searchParams.rooms}`} size="large" fullWidth sx={{ height: 50 }} endIcon={<ArrowForwardOutlinedIcon />} >Zobacz dostępność</Button>
          : <></>
        }
      </CardActions>
    </Card>
  );
}

export default AccomondationSearchListItem;
