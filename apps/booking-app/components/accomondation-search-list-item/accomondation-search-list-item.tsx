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
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );
  return (
    <Box maxWidth="md" sx={{ mb: 3 }}>
      <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="strech">
                <Typography component="div" variant="h5">
                  {props.accomondation.name}
                </Typography>
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
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Chip label="2 sypialnie" variant="outlined" />
                <Chip label="1 salon" variant="filled" />
                <Chip label="1 łazienka" variant="outlined" />
                <Chip label="1 kuchnia" variant="filled" />
                <Chip label="60 m2" variant="outlined" />
                <Chip label="3 łóżka" variant="filled" />
              </Stack>
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box></Box>
              <Stack justifyContent="flex-end">
                <Typography variant="h6" color="text.primary" textAlign="end">
                  {props.accomondation.price} PLN
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
