import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, CardActions, Divider, FormControl, InputLabel, MenuItem, Rating, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
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
import Modal from '@mui/material/Modal';
import { calculateRate } from '../accomondation-search-list-item/accomondation-search-list-item';
import { useRouter } from 'next/router';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const sortOptions = [
  'Najtrafniejsze', 'Najnowsze', 'Najstarsze', 'Najwyższe oceny', 'Najniższe oceny',
]

export interface GuestReviewsProps {
  reviews: any[];
  ratings: any[];
}

export const calculateDuration = (checkIn, checkOut) => {
  const date1 = new Date(checkIn);
  const date2 = new Date(checkOut);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 1) {
    return diffDays + " dzień"
  } else
    return diffDays + " dni";
}

export function GuestReviews(props: GuestReviewsProps) {
  const [sort, setSort] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [reviews, setReviews] = React.useState<any[]>([]);
  const [accRatings, setAccRatings] = React.useState<any[]>([]);
  const [ratings, setRatings] = React.useState([
    {
      name: 'Personel',
      value: 0,
    },
    {
      name: 'Udogodnienia',
      value: 0,
    },
    {
      name: 'Czystość',
      value: 0,
    },
    {
      name: 'Komfort',
      value: 0,
    },
    {
      name: 'Stosunek jakości do ceny ',
      value: 0,
    },
    {
      name: 'Lokalizacja',
      value: 0,
    },
  ]);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const router = useRouter();


  React.useEffect(() => {
    setReviews(props.reviews);
    setAccRatings(props.ratings);
  })

  const handleChange = (event, newValue) => {
    const updatedRatings = ratings.map(item => {
      if (item.name === event.target.name) {
        return {
          ...item,
          value: newValue
        }
      } else {
        return item;
      }
    })
    setRatings(updatedRatings);
  }

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    sortReviews(event.target.value);
  }

  const sortReviews = (type: string) => {
    switch (type) {
      case "Najnowsze":
        setReviews(reviews.sort((firstItem, secondItem) => new Date(firstItem.publicationDate.split("T")[0]).getTime() + new Date(secondItem.publicationDate.split("T")[0]).getTime()));
        break;
      case "Najstarsze":
        setReviews(reviews.sort((firstItem, secondItem) => new Date(firstItem.publicationDate.split("T")[0]).getTime() - new Date(secondItem.publicationDate.split("T")[0]).getTime()));
        break;
      case "Najwyższe oceny":
        setReviews(reviews.sort((firstItem, secondItem) => firstItem.rate + secondItem.rate));
        break;
      case "Najniższe oceny":
        setReviews(reviews.sort((firstItem, secondItem) => firstItem.rate - secondItem.rate));
        break;
      case "Najtrafniejsze":
        setReviews(reviews.sort((firstItem, secondItem) => firstItem.helpful + secondItem.helpful));
        break;
    }
  }

  const handleSubmit = () => { }

  return (
    <Grid container spacing={2} columns={{ xs: 2, md: 12 }} justifyContent="center" sx={{ mb: 6 }}>
      <Grid item xs="auto">
        <Card>
          <CardContent>
            <Stack alignItems="center">
              <Typography variant="h3">4.8</Typography>
              <Rating name="read-only" value={Number(calculateRate(accRatings).value)} readOnly precision={0.1} />
              <Typography color="text.secondary" variant="body2">{calculateRate(accRatings).quantity} opinie</Typography>
            </Stack>
            <Divider variant="middle" sx={{ my: 3 }} />
            <Stack spacing={1}>
              {accRatings.map(item =>
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
            <Button variant="outlined" endIcon={<AddIcon />} sx={{ height: 56 }} onClick={handleOpen}>
              Napisz opinię
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
                  Chcesz dodać opinię?
                </Typography>
                <Typography color="text.secondary" variant="body2">Możesz wystawić opinię jeśli zarezerwowałeś pobyt w tym obiekcie.</Typography>
                <Stack direction="row" justifyContent="space-between" mt={2}>
                  <Button onClick={handleClose}>Ok</Button>
                  <Button onClick={() => router.push('/login')} variant='contained' autoFocus>
                    Przejdź do strony logowania
                  </Button>
                </Stack>
              </Box>
            </Modal>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Sortuj według</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sortuj według"
                  onChange={handleSortChange}
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
                    title={item.author.name}
                    titleTypographyProps={{ fontSize: 18 }}
                    subheader={`Opublikowano: ${item.publicationDate.split("T")[0]}`}
                    subheaderTypographyProps={{ fontSize: 16 }}
                    action={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Rating name="read-only" value={item.rate} readOnly precision={0.1} />
                        <Typography variant='h6'>{item.rate.toPrecision(2)}</Typography>
                      </Stack>
                    }
                  />
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }} flexWrap="wrap">
                      <Stack direction="row" spacing={1} alignItems="center" my={1}>
                        <BedOutlinedIcon fontSize='small' color="disabled" />
                        <Typography variant="body2" color="text.secondary">
                          {item.reservation.roomOption[0].room.name}
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack direction="row" spacing={1} alignItems="center" my={1}>
                        <CalendarMonthOutlinedIcon fontSize='small' color="disabled" />
                        <Typography variant="body2" color="text.secondary">
                          {item.reservation.checkOutDate.split("T")[0]}
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack direction="row" spacing={1} alignItems="center" my={1}>
                        <BedtimeOutlinedIcon fontSize='small' color="disabled" />
                        <Typography variant="body2" color="text.secondary">
                          {calculateDuration(item.reservation.checkInDate.split("T")[0], item.reservation.checkOutDate.split("T")[0])}
                        </Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack direction="row" spacing={1} alignItems="center" my={1}>
                        <FamilyRestroomIcon fontSize='small' color="disabled" />
                        <Typography variant="body2" color="text.secondary">
                          {item.reservation.kids + item.reservation.adults}
                        </Typography>
                      </Stack>

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
                      Pomocna {item.helpful !== 0 ? "(" + item.helpful + ")" : ""}
                    </Button>
                    <Button variant="text" startIcon={<ThumbDownOffAltIcon />}>
                      Niezbyt pomocna {item.notHelpful !== 0 ? "(" + item.notHelpful + ")" : ""}
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
