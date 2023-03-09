import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, Divider, IconButton, LinearProgress, Rating, Slider, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

const overallRating =
{
  rate: 4.8,
  rateNumber: 104,
  individualRatings: [
    {
      value: 1,
      rateNumber: 0
    },
    {
      value: 2,
      rateNumber: 0
    },
    {
      value: 3,
      rateNumber: 0
    },
    {
      value: 4,
      rateNumber: 2
    },
    {
      value: 5,
      rateNumber: 102
    },
  ]
}


const categoryRating = [
  {
    name: 'Personel',
    rate: 4.1
  },
  {
    name: 'Udogodnienia',
    rate: 4.9
  },
  {
    name: 'Czystość',
    rate: 4.8
  },
  {
    name: 'Komfort',
    rate: 4.6
  },
  {
    name: 'Stosunek jakości do ceny ',
    rate: 4.6
  },
  {
    name: 'Lokalizacja',
    rate: 4.4
  },
]


export interface GuestReviewsProps { }

export function GuestReviews(props: GuestReviewsProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Stack alignItems="center">
                  <Typography variant="h3">4.8</Typography>
                  <Rating name="read-only" value={overallRating.rate} readOnly precision={0.1} />
                  <Typography color="text.secondary" variant="body2">{overallRating.rateNumber} opinie</Typography>
                </Stack>
                <Stack direction="column-reverse" sx={{ width: '100%' }}>
                  {overallRating.individualRatings.map(item =>
                    <Stack direction="row" alignItems="center" justifyContent="space-around" spacing={1}>
                      <Typography variant="caption">{item.value}</Typography>
                      <Box sx={{ minWidth: 130 }}>
                        <LinearProgress variant="determinate" value={item.rateNumber} />
                      </Box>
                    </Stack>
                  )}
                </Stack>
              </Stack>
              <Divider variant="middle" sx={{ my: 3 }} />
              <Stack spacing={1}>
                {categoryRating.map(item =>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="text.secondary" variant="body2">{item.name}</Typography>
                    <Stack direction="row" justifyContent="space-between">
                      <Rating name="read-only" value={item.rate} readOnly sx={{ mr: 2 }} size="small" precision={0.1} />
                      <Typography>{item.rate}</Typography>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <Card sx={{ minWidth: 275 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  A
                </Avatar>
              }
              title="Anna Nowak"
              subheader="Polska"
              action={
                <Stack direction="row" spacing={1} alignItems="center">
                  <Rating name="read-only" value={5.0} readOnly precision={0.1} />
                  <Typography variant='h6'>5.0</Typography>
                </Stack>
              }
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Wyjątkowy
              </Typography>
              <Stack>
                <Typography variant="caption" color="text.secondary" gutterBottom>
                
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Po raz kolejny w tym samym miejscu i ciągle pozytywnie.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GuestReviews;
