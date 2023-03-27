import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, CardActions, Divider, FormControl, IconButton, InputLabel, LinearProgress, MenuItem, Rating, Select, Slider, Stack, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';

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
    title: 'Polecam do pracy i odpoczynku',
    description: 'Rewelacyjne miejsce pod każdym względem.',
    author: 'Tomasz Kowalski',
    location: 'Polska',
    date: '12-01-2023',
    rate: 4.5,
    reservation: {
      room: 'Pokój trzyosobowy',
      duration: '3 noce',
      date: 'styczeń 2023',
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
  const theme = useTheme();

  return (
    <Grid container spacing={2} columns={{ xs: 2, md: 12 }} justifyContent="center" sx={{ mb: 6 }}>
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
            maxHeight: '55vh',
            boxShadow: 1,
            paddingTop: 2
          }}
        >
          <Stack direction="row" sx={{ px: 2, mb: 1 }} justifyContent="space-between" alignItems="center">
            <Button variant="outlined" endIcon={<AddIcon />} sx={{ height: 56 }}>
              Napisz opinię
            </Button>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Filtruj</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Filtruj"
                  onChange={(e) => setSort(e.target.value)}
                >
                  {sortOptions.map((item) =>
                    <MenuItem value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
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
          </Stack>
          {
            reviews.map((item) => (
              <ListItem key={`item-${item.id}`}>
                <Card sx={{ width: '100%', mb: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 1, paddingRight: 1 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 48, height: 48 }} aria-label="person">
                        A
                      </Avatar>
                    }
                    title={item.author}
                    titleTypographyProps={{ fontSize: 18 }}
                    subheader={`Opublikowano: ${item.date}`}
                    subheaderTypographyProps={{ fontSize: 16 }}
                    action={
                      <Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Rating name="read-only" value={item.rate} readOnly precision={0.1} />
                          <Typography variant='h6'>{item.rate.toPrecision(2)}</Typography>
                        </Stack>
                      </Stack>
                    }
                  />
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                      <BedOutlinedIcon fontSize='small' color="disabled" />
                      <Typography variant="body2" color="text.secondary">
                        {item.reservation.room}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <CalendarMonthOutlinedIcon fontSize='small' color="disabled" />
                      <Typography variant="body2" color="text.secondary">
                        {item.reservation.date}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <BedtimeOutlinedIcon fontSize='small' color="disabled" />
                      <Typography variant="body2" color="text.secondary">
                        {item.reservation.duration}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <FamilyRestroomIcon fontSize='small' color="disabled" />
                      <Typography variant="body2" color="text.secondary">
                        {item.reservation.option}
                      </Typography>
                    </Stack>
                    <Typography variant="h5" component="div" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "right" }}>
                    <Button variant="text" startIcon={<ThumbUpOffAltIcon />}>
                      Pomocna
                    </Button>
                    <Button variant="text" startIcon={<ThumbDownOffAltIcon />}>
                      Niezbyt pomocna
                    </Button>
                  </CardActions>
                </Card>
              </ListItem>
            ))
          }
        </List>
      </Grid>
    </Grid>
  );
}

export default GuestReviews;
