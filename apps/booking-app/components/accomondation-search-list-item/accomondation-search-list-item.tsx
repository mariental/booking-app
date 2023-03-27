import * as React from 'react';
import { Accommodation } from '../../accomondations';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Button, CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarsIcon from '@mui/icons-material/Stars';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export interface AccomondationSearchListItemProps {
  accomondation: Accommodation;
}

export function AccomondationSearchListItem(props: AccomondationSearchListItemProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card elevation={5} sx={{ width: 470, my: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 300 }}
        image={props.accomondation.mainImage.src}
        alt={props.accomondation.mainImage.title}
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
                {props.accomondation.location}
              </Typography>
            </Stack>
          </Stack>

          <Stack alignItems="flex-end">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <StarIcon sx={{ color: '#faaf00' }} />
              <Typography variant="h5" color="primary">{props.accomondation.rate}</Typography>
            </Stack>
            <Typography variant="caption">(103 opinie)</Typography>
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
            {props.accomondation.price} PLN / noc
          </Typography>
          <Typography variant="caption" color="text.secondary" textAlign="end">
            Zawiera opłaty i podatki
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ padding: 0, mt: 2 }}>
        <Button variant='contained' href={`/accomondation-details/${props.accomondation.id}`} size="large" fullWidth sx={{ height: 50 }} endIcon={<ArrowForwardOutlinedIcon />} >Zobacz dostępność</Button>
      </CardActions>
    </Card>
  );
}

export default AccomondationSearchListItem;
