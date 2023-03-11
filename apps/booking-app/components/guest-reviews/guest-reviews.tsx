import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, CardActions, Divider, FormControl, IconButton, InputLabel, LinearProgress, MenuItem, Rating, Select, Slider, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import StarIcon from '@mui/icons-material/Star';

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

const reviews = [
  {
    id: 1,
    title: 'Wyjątkowy',
    description: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
    author: 'Anna Nowak',
    location: 'Polska',
    date: '01-03-2023',
    rate: 5.0,
    reservation: {
      room: 'Apartament z 1 sypialnią',
      duration: '1 noc',
      date: 'luty 2023',
      option: 'rodzina'
    }
  },
  {
    id: 2,
    title: 'Wyjątkowy',
    description: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
    author: 'Anna Nowak',
    location: 'Polska',
    date: '01-03-2023',
    rate: 5.0,
    reservation: {
      room: 'Apartament z 1 sypialnią',
      duration: '1 noc',
      date: 'luty 2023',
      option: 'rodzina'
    }
  },
  {
    id: 3,
    title: 'Wyjątkowy',
    description: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
    author: 'Anna Nowak',
    location: 'Polska',
    date: '01-03-2023',
    rate: 5.0,
    reservation: {
      room: 'Apartament z 1 sypialnią',
      duration: '1 noc',
      date: 'luty 2023',
      option: 'rodzina'
    }
  },
  {
    id: 4,
    title: 'Wyjątkowy',
    description: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
    author: 'Anna Nowak',
    location: 'Polska',
    date: '01-03-2023',
    rate: 5.0,
    reservation: {
      room: 'Apartament z 1 sypialnią',
      duration: '1 noc',
      date: 'luty 2023',
      option: 'rodzina'
    }
  }
]

const sortOptions = [
  'Najtrafniejsze', 'Najnowsze', 'Najstarsze', 'Najwyższe oceny', 'Najniższe oceny',
]

export interface GuestReviewsProps { }

export function GuestReviews(props: GuestReviewsProps) {
  const [sort, setSort] = React.useState('');


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 2, md: 12 }} justifyContent="center">
        <Grid item xs="auto">
          <Card>
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
                      <Box sx={{ minWidth: 120 }}>
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
        <Grid item xs={2} md={9}>
          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
              overflow: 'auto',
              maxHeight: '70vh',
              boxShadow: 1
            }}
          >
            <Stack direction="row" sx={{ px: 2 }} justifyContent="space-between" alignItems="center">
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" startIcon={<StarIcon sx={{ color: '#faaf00' }} />}>
                  1
                </Button>
                <Button variant="outlined" startIcon={<StarIcon sx={{ color: '#faaf00' }} />} >
                  2
                </Button>
                <Button variant="outlined" startIcon={<StarIcon sx={{ color: '#faaf00' }} />} >
                  3
                </Button>
                <Button variant="outlined" startIcon={<StarIcon sx={{ color: '#faaf00' }} />} >
                  4
                </Button>
                <Button variant="outlined" startIcon={<StarIcon sx={{ color: '#faaf00' }} />} >
                  5
                </Button>
              </Stack>
              <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                <InputLabel id="demo-simple-select-label">Sortuj według</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sortuj według"
                  onChange={(e) => setSort(e.target.value)}
                >
                  {sortOptions.map((item) =>
                    <MenuItem value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Stack>
            {
              reviews.map((item) => (
                <ListItem key={`item-${item.id}`}>
                  <Card sx={{ width: '100%' }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          A
                        </Avatar>
                      }
                      title={item.author}
                      subheader={item.location}
                      action={
                        <Stack>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Rating name="read-only" value={5.0} readOnly precision={0.1} />
                            <Typography variant='h6'>5.0</Typography>
                          </Stack>
                          <Typography variant='caption' textAlign="right" color="text.secondary">{item.date}</Typography>
                        </Stack>
                      }
                    />
                    <CardContent>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                          {item.reservation.room}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="caption" color="text.secondary">
                          {item.reservation.date}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="caption" color="text.secondary">
                          {item.reservation.duration}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <FamilyRestroomIcon fontSize='small' color="disabled" />
                        <Typography variant="caption" color="text.secondary">
                          {item.reservation.option}
                        </Typography>
                      </Stack>
                      <Typography variant="h5" component="div">
                        Wyjątkowy
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Po raz kolejny w tym samym miejscu i ciągle pozytywnie.
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "right" }}>
                      <IconButton color="primary" aria-label="like" component="label">
                        <ThumbUpOffAltIcon />
                      </IconButton>
                      <IconButton color="primary" aria-label="unlike" component="label">
                        <ThumbDownOffAltIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </ListItem>
              ))
            }
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GuestReviews;
