import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Divider,
  Box,
  Modal,
  styled,
  TextField,
  Rating,
  CircularProgress,
} from '@mui/material';
import { calculateDuration } from 'apps/booking-app/store/reservationSlice';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import React, { use } from 'react';
import { calculateRate } from '../accomondation-search-list-item/accomondation-search-list-item';
import {
  validateContent,
  validateRatings,
  validateTitle,
} from 'apps/booking-app/tools/validators';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'apps/booking-app/firebase/firebaseApp';

export interface UserReservationProps {
  reservation: any;
}

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `1px solid ${theme.palette.primary.light}`,
    },
    '&:hover fieldset': {
      borderColor: `${theme.palette.secondary.light}`,
    },
  },
}));

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

export function UserReservation(props: UserReservationProps) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [titleError, setTitleError] = React.useState<boolean>(false);
  const [contentError, setContentError] = React.useState<boolean>(false);
  const [ratingsError, setRatingsError] = React.useState<boolean>(false);
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
      name: 'Stosunek jakości do ceny',
      value: 0,
    },
    {
      name: 'Lokalizacja',
      value: 0,
    },
  ]);
  const [dbUser, setDbUser] = React.useState<any>(null);
  const [user] = useAuthState(auth);
  const [review, setReview] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    if (validateRatings(updatedRatings)) {
      setRatingsError(false);
    } else {
      setRatingsError(true);
    }
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (validateTitle(event.target.value)) {
      setTitleError(false);
    } else {
      setTitleError(true);
    }
  };
  const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
    if (validateContent(event.target.value)) {
      setContentError(false);
    } else {
      setContentError(true);
    }
  };

  const validateData = () => {
    if (validateTitle(title)) {
      setTitleError(false);
    } else {
      setTitleError(true);
    }
    if (validateContent(content)) {
      setContentError(false);
    } else {
      setContentError(true);
    }
    if (validateRatings(ratings)) {
      setRatingsError(false);
    } else {
      setRatingsError(true);
    }
  };

  const getUser = async (email: string) => {
    const resonse = await fetch(`/api/user/${email}`, {
      method: 'GET',
    });
    return resonse.json();
  };

  const getReview = async () => {
    const data = {
      authorId: dbUser.id,
      accommondationId: props.reservation.roomOption[0].room.accommondation.id,
    };
    const resonse = await fetch(`/api/review/getOne}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return resonse.json();
  };

  React.useEffect(() => {
    if (user) {
      getUser(user.email).then((data) => {
        setDbUser(data);
      });
    }
  }, []);

  React.useEffect(() => {
    if (dbUser) {
      getReview().then((data) => {
        setReview(data);
        setLoading(false);
      });
    }
  }, [dbUser]);

  const saveReview = async () => {
    if (dbUser) {
      const data = {
        title: title,
        content: content,
        authorId: dbUser.id,
        rate: Number(calculateRate(ratings).value),
        publicationDate: new Date(),
        reservationId: props.reservation.id,
        accommondationId:
          props.reservation.roomOption[0].room.accommondation.id,
      };
      const resonse = await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      return resonse.json();
    }
  };

  const saveRatings = async (rate: any) => {
    if (dbUser) {
      const data = {
        name: rate.name,
        value: rate.value,
        accommondationId:
          props.reservation.roomOption[0].room.accommondation.id,
      };
      const resonse = await fetch(`/api/ratings`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      return resonse.json();
    }
  };

  const handleSubmit = () => {
    validateData();
    if (
      validateTitle(title) &&
      validateContent(content) &&
      validateRatings(ratings)
    ) {
      if (!review) {
        saveReview()
          .then((data) => {
            ratings.forEach((rate) => {
              saveRatings(rate).catch((error) => console.log(error));
            });
            handleClose();
          })
          .catch((error) => console.log(error));
      }
    }
  };
  if (loading) {
    return (
      <CircularProgress></CircularProgress>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={props.reservation.roomOption[0].room.images[0].src}
          title={props.reservation.roomOption[0].room.images[0].alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.reservation.roomOption[0].room.accommondation.name}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mb: 3 }}
            flexWrap="wrap"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <BedOutlinedIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {props.reservation.roomOption[0].room.name}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonthOutlinedIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {props.reservation.checkOutDate.split('T')[0]}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="row" spacing={1} alignItems="center">
              <BedtimeOutlinedIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {calculateDuration(
                  props.reservation.checkInDate.split('T')[0],
                  props.reservation.checkOutDate.split('T')[0]
                )}
                {calculateDuration(
                  props.reservation.checkInDate.split('T')[0],
                  props.reservation.checkOutDate.split('T')[0]
                ) === 1
                  ? ' dzień'
                  : ' dni'}
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack direction="row" spacing={1} alignItems="center">
              <FamilyRestroomIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {props.reservation.kids + props.reservation.adults}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          {review ? (
            <Button size="small" variant="contained" disabled>
              Opinia wystawiona
            </Button>
          ) : (
            <Button size="small" variant="contained" onClick={handleOpen}>
              Dodaj opinię o pobycie
            </Button>
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h4" align="center" mb={2}>
                Dodaj opinię
              </Typography>
              <Stack spacing={2}>
                <CustomTextField
                  id="title"
                  label="Tytuł"
                  variant="outlined"
                  name="title"
                  type="text"
                  value={title}
                  onChange={handleChangeTitle}
                  error={titleError}
                  helperText={titleError ? 'Wpisz tytuł' : ''}
                  fullWidth
                  required
                />
                <CustomTextField
                  id="content"
                  label="Treść"
                  variant="outlined"
                  name="content"
                  type="text"
                  value={content}
                  onChange={handleChangeContent}
                  error={contentError}
                  helperText={contentError ? 'Dodaj treść' : ''}
                  multiline
                  rows={3}
                  fullWidth
                  required
                />
              </Stack>
              <Stack spacing={2} mt={2}>
                {ratings.map((rating) => (
                  <Stack>
                    <Typography component="legend">{rating.name}</Typography>
                    <Stack direction="row" spacing={1}>
                      <Rating
                        name={rating.name}
                        value={rating.value}
                        precision={0.1}
                        onChange={handleChange}
                      />
                      <Typography>{rating.value}</Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
              <Typography variant="h5" align="center" mt={2}>
                Końcowa ocena: {calculateRate(ratings).value}
              </Typography>
              {ratingsError ? (
                <Typography variant="h6" align="center" color="error" mb={2}>
                  Uzupełnij wszystkie wartości ocen
                </Typography>
              ) : (
                <></>
              )}
              <Stack direction="row" justifyContent="right" spacing={2} mt={2}>
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Dodaj
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="warning"
                  onClick={handleClose}
                >
                  Anuluj
                </Button>
              </Stack>
            </Box>
          </Modal>
        </CardActions>
      </Card>
    );
  }
}

export default UserReservation;
