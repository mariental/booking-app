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
import { Button } from '@mui/material';
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

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

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
    <Box sx={{ mb: 3 }}>
      <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="strech">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography component="div" variant="h5">
                    {props.accomondation.name}
                  </Typography>
                  <ThumbUpIcon color='primary'/>
                  <StarsIcon color='primary' />
                </Stack>
                <Stack>
                  <Rating name="read-only" value={props.accomondation.rate} precision={0.5} readOnly />
                  <Typography variant="caption" color="text.secondary" textAlign="end">
                    103 opinie
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="body1" color="text.secondary" component="div">
                {props.accomondation.location}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                <Chip label="2 sypialnie" variant="outlined" icon={<KingBedOutlinedIcon />} />
                <Chip label="1 salon" variant="filled" icon={<ChairOutlinedIcon />} />
                <Chip label="1 łazienka" variant="outlined" icon={<BathtubOutlinedIcon />} />
                <Chip label="1 kuchnia" variant="filled" icon={<KitchenOutlinedIcon />} />
                <Chip label="60 m2" variant="outlined" icon={<HeightOutlinedIcon />} />
                <Chip label="3 łóżka" variant="filled" icon={<BedOutlinedIcon />} />
              </Stack>
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={6}>
              <Stack spacing={1}>
                <Alert severity="success" icon={false} variant="outlined" sx={{ fontSize: 12, maxWidth: 400 }}>Bezpłatne odwołanie. Możesz odwołać rezerwację później, więc skorzystaj z wyjątkowej okazji cenowej już teraz.</Alert>
                <Alert severity="error" icon={false} variant="outlined" sx={{ fontSize: 12, maxWidth: 400 }}>Na naszej stronie został tylko 1 w tej cenie</Alert>
              </Stack>
              <Stack justifyContent="flex-end">
                <Typography variant="h6" color="text.primary" textAlign="end">
                  {props.accomondation.price} PLN
                </Typography>
                <Typography variant="overline" color="text.primary" textAlign="end">
                  &#40;4 doby, 2 osoby&#41;
                </Typography>
                <Typography variant="caption" color="text.secondary" textAlign="end">
                  Zawiera opłaty i podatki
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Button variant='contained'>Zobacz dostępność</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={props.accomondation.mainImage.src}
          alt={props.accomondation.mainImage.title}
        />
      </Card>
    </Box>
  );
}

export default AccomondationSearchListItem;
