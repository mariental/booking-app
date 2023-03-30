import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, CardActions, Divider, FormControl, InputLabel, LinearProgress, MenuItem, Rating, Select, Stack, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import { Rate, Review } from 'apps/booking-app/store/accomondationSlice';

const sortOptions = [
  'Najtrafniejsze', 'Najnowsze', 'Najstarsze', 'Najwyższe oceny', 'Najniższe oceny',
]

export interface GuestReviewsProps { 
  accommodationReviews: Review[];
  accommodationRatings: Rate[];
}

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
                <Rating name="read-only" value={props.accommodationRatings.find(item => item.name === 'Overall').value} readOnly precision={0.1} />
                <Typography color="text.secondary" variant="body2">{props.accommodationRatings.find(item => item.name === 'Overall').quantity} opinie</Typography>
              </Stack>
              <Stack direction="column-reverse" sx={{ width: '100%' }}>
                {props.accommodationRatings.map(item =>
                  <Stack direction="row" alignItems="center" justifyContent="space-around" spacing={1}>
                    <Typography variant="caption">{item.value}</Typography>
                    <Box sx={{ minWidth: 120 }}>
                      <LinearProgress variant="determinate" value={item.quantity} />
                    </Box>
                  </Stack>
                )}
              </Stack>
            </Stack>
            <Divider variant="middle" sx={{ my: 3 }} />
            <Stack spacing={1}>
              {props.accommodationRatings.map(item =>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary" variant="body2">{item.name}</Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Rating name="read-only" value={item.value} readOnly sx={{ mr: 2 }} size="small" precision={0.1} />
                    <Typography>{item.value}</Typography>
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
            props.accommodationReviews.map((item) => (
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
                    subheader={`Opublikowano: ${item.publicationDate}`}
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
                        {item.reservationInfo.name}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <CalendarMonthOutlinedIcon fontSize='small' color="disabled" />
                      <Typography variant="body2" color="text.secondary">
                        {item.reservationInfo.date}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <BedtimeOutlinedIcon fontSize='small' color="disabled" />
                      <Typography variant="body2" color="text.secondary">
                        {item.reservationInfo.duration}
                      </Typography>
                      <Divider orientation="vertical" flexItem />
                      <FamilyRestroomIcon fontSize='small' color="disabled" />
                      <Typography variant="body2" color="text.secondary">
                        {item.reservationInfo.option}
                      </Typography>
                    </Stack>
                    <Typography variant="h5" component="div" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {item.content}
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
