import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Rating,
  Stack,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarsIcon from '@mui/icons-material/Stars';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Icon from '@mui/material/Icon';
import { calculateRate } from '../accomondation-search-list-item/accomondation-search-list-item';
import { useRouter } from 'next/router';
import Modal from '@mui/material/Modal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'apps/booking-app/firebase/firebaseApp';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export interface DetailsInfoProps {
  accommodation: any;
  setValue: Function;
}

export function DetailsInfo(props: DetailsInfoProps) {
  const [showMore, setShowMore] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const addToFavorites = async () => {
    if(user) {
      const data = {
        email: user.email, 
        accommondationId: props.accommodation.id
      }
      const resonse = await fetch(`/api/user/favorites`, {
        method: "POST",
        body: JSON.stringify(data)
      });
      return resonse.json();
    }
  }

  const handleClickOpen = () => {
    user ? addToFavorites().then((data) => setOpen(true)) : setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, md: 12 }}>
      <Grid item xs={1} md={5}>
        <Stack direction="row" spacing={2} sx={{ mb: 1, width: '100%' }}>
          <Button
            endIcon={<FavoriteBorderOutlinedIcon />}
            color="error"
            variant="contained"
            onClick={handleClickOpen}
            fullWidth
          >
            Dodaj miejsce do ulubionych
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {user ? (
              <>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Dodano do listy ulubionych.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Ok</Button>
                  <Button
                    onClick={() => router.push('/profile')}
                    variant="contained"
                    autoFocus
                  >
                    Zoabcz listę
                  </Button>
                </DialogActions>
              </>
            ) : (
              <>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Zaloguj się aby móc dodać miejsce do listy ulubionych.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Ok</Button>
                  <Button
                    onClick={() => router.push('/login')}
                    variant="contained"
                    autoFocus
                  >
                    Przejdź do strony logowania
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>
          <Button
            variant="contained"
            endIcon={<CameraAltOutlinedIcon />}
            fullWidth
          >
            Więcej zdjęć
          </Button>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Button variant="contained" onClick={handleCloseModal} fullWidth>
                Zamknij
              </Button>
            </Box>
          </Modal>
        </Stack>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4 }}>
          {props.accommodation.images
            .filter((image) => image.id !== 1)
            .map((image) => (
              <Grid item xs={1} sm={2} key={image.id}>
                <Box
                  sx={{
                    height: 320,
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </Grid>
            ))}
        </Grid>
        <Stack sx={{ mt: 1, width: '100%' }} alignItems="end"></Stack>
      </Grid>
      <Grid item xs={1} md={7}>
        <Box>
          <Stack
            direction="row"
            alignContent="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography component="div" variant="h5">
                  {props.accommodation.name}
                </Typography>
                <StarsIcon color="primary" />
                <StarsIcon color="primary" />
                <StarsIcon color="primary" />
              </Stack>
              <Stack direction="row" alignItems="center">
                <LocationOnOutlinedIcon color="action" />
                <Typography variant="h6" color="text.secondary" component="div">
                  {props.accommodation.address.city},{' '}
                  {props.accommodation.address.country}
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Rating
                  name="read-only"
                  value={Number(
                    calculateRate(props.accommodation.ratings).value
                  )}
                  precision={0.01}
                  readOnly
                />
                <Typography variant="h5" color="primary">
                  {calculateRate(props.accommodation.ratings).value}
                </Typography>
              </Stack>
              <Button
                variant="contained"
                size="small"
                endIcon={<ArrowForwardIosOutlinedIcon />}
                onClick={() => props.setValue(4)}
              >
                Zobacz opinie
              </Button>
            </Stack>
          </Stack>
          <Stack boxShadow={2} padding={2} mt={3}>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ mt: 2, whiteSpace: 'pre-line' }}
            >
              {showMore
                ? props.accommodation.description
                : `${props.accommodation.description.substring(0, 295)}`}
            </Typography>
            <Button
              onClick={() => setShowMore(!showMore)}
              endIcon={
                showMore ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )
              }
            >
              {showMore ? 'Pokaż mniej' : 'Pokaż więcej'}
            </Button>
          </Stack>
          <Stack boxShadow={2} padding={2} mt={3}>
            <Typography variant="h6" color="text.secondary">
              Udogodnienia:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
              {props.accommodation.facilities.map((facility) => (
                <Chip
                  key={facility.id}
                  label={facility.name}
                  icon={<Icon>{facility.icon}</Icon>}
                ></Chip>
              ))}
              <Button
                variant="outlined"
                size="small"
                onClick={() => props.setValue(2)}
                endIcon={<ArrowForwardIosOutlinedIcon />}
                sx={{ borderRadius: 24 }}
              >
                Zobacz więcej
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'end' }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ height: 60 }}
            onClick={() => props.setValue(1)}
            fullWidth
          >
            Wybierz pokój
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DetailsInfo;
