import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {
  Avatar,
  Button,
  CardActions,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
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
import { calculateDuration } from 'apps/booking-app/store/reservationSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'apps/booking-app/firebase/firebaseApp';
import Review from '../review/review';

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
  'Najtrafniejsze',
  'Najnowsze',
  'Najstarsze',
  'Najwyższe oceny',
  'Najniższe oceny',
];

export interface GuestReviewsProps {
  reviews: any[];
  ratings: any[];
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
  const [user, loading] = useAuthState(auth);

  React.useEffect(() => {
    setReviews(props.reviews);
    setAccRatings(props.ratings);
  });

  const handleChange = (event, newValue) => {
    const updatedRatings = ratings.map((item) => {
      if (item.name === event.target.name) {
        return {
          ...item,
          value: newValue,
        };
      } else {
        return item;
      }
    });
    setRatings(updatedRatings);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    sortReviews(event.target.value);
  };

  const sortReviews = (type: string) => {
    switch (type) {
      case 'Najnowsze':
        setReviews(
          reviews.sort(
            (firstItem, secondItem) =>
              new Date(firstItem.publicationDate.split('T')[0]).getTime() +
              new Date(secondItem.publicationDate.split('T')[0]).getTime()
          )
        );
        break;
      case 'Najstarsze':
        setReviews(
          reviews.sort(
            (firstItem, secondItem) =>
              new Date(firstItem.publicationDate.split('T')[0]).getTime() -
              new Date(secondItem.publicationDate.split('T')[0]).getTime()
          )
        );
        break;
      case 'Najwyższe oceny':
        setReviews(
          reviews.sort(
            (firstItem, secondItem) => firstItem.rate + secondItem.rate
          )
        );
        break;
      case 'Najniższe oceny':
        setReviews(
          reviews.sort(
            (firstItem, secondItem) => firstItem.rate - secondItem.rate
          )
        );
        break;
      case 'Najtrafniejsze':
        setReviews(
          reviews.sort(
            (firstItem, secondItem) => firstItem.helpful + secondItem.helpful
          )
        );
        break;
    }
  };

  const handleSubmit = () => {};

  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 2, md: 12 }}
      justifyContent="center"
      sx={{ mb: 6 }}
    >
      <Grid item xs="auto">
        <Card>
          <CardContent>
            <Stack alignItems="center">
              <Typography variant="h3">4.8</Typography>
              <Rating
                name="read-only"
                value={Number(calculateRate(accRatings).value)}
                readOnly
                precision={0.1}
              />
              <Typography color="text.secondary" variant="body2">
                {calculateRate(accRatings).quantity} opinie
              </Typography>
            </Stack>
            <Divider variant="middle" sx={{ my: 3 }} />
            <Stack spacing={1}>
              {accRatings.map((item) => (
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary" variant="body2">
                    {item.name}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Rating
                      name="read-only"
                      value={item.value}
                      readOnly
                      sx={{ mr: 2 }}
                      size="small"
                      precision={0.1}
                    />
                    <Typography>{item.value}</Typography>
                  </Stack>
                </Stack>
              ))}
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
            paddingTop: 2,
          }}
        >
          <Stack
            direction="row"
            sx={{ px: 2, mb: 1 }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              sx={{ height: 56 }}
              onClick={handleOpen}
            >
              Napisz opinię
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {user ? (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      mb={2}
                    >
                      Chcesz dodać opinię?
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button
                        onClick={() => router.push('/profile')}
                        variant="contained"
                        autoFocus
                      >
                        Tak, przejdź do strony
                      </Button>
                      <Button
                        onClick={handleClose}
                        variant="contained"
                        autoFocus
                      >
                        Nie
                      </Button>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      mb={2}
                    >
                      Chcesz dodać opinię?
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      Możesz wystawić opinię jeśli zarezerwowałeś pobyt w tym
                      obiekcie.
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      mt={2}
                    >
                      <Button onClick={handleClose}>Ok</Button>
                      <Button
                        onClick={() => router.push('/login')}
                        variant="contained"
                        autoFocus
                      >
                        Przejdź do strony logowania
                      </Button>
                    </Stack>
                  </>
                )}
              </Box>
            </Modal>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  Sortuj według
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sortuj według"
                  onChange={handleSortChange}
                >
                  {sortOptions.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          {reviews.map((item) => (
            <Review review={item}/>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default GuestReviews;
