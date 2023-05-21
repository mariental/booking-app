import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ImageList, ImageListItem, Rating, Stack } from '@mui/material';
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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 1, md: 12 }}>
      <Grid item xs={1} md={5}>
        <Stack direction="row" spacing={2} sx={{ mb: 1, width: '100%' }} >
          <Button endIcon={<FavoriteBorderOutlinedIcon />} color="error" variant="contained" onClick={handleClickOpen} fullWidth>Dodaj miejsce do ulubionych</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Zaloguj się aby móc dodać miejsce do listy ulubionych.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok</Button>
              <Button onClick={() => router.push('/login')} variant='contained' autoFocus>
                Przejdź do strony logowania
              </Button>
            </DialogActions>
          </Dialog>
          <Button variant="contained" endIcon={<CameraAltOutlinedIcon />} onClick={handleOpenModal} fullWidth>Więcej zdjęć</Button>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <Button variant="contained" onClick={handleCloseModal} fullWidth>Zamknij</Button>
            </Box>
          </Modal>
        </Stack>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4 }}>
          {props.accommodation.images.filter(image => image.id !== 1).map(image => (
            <Grid item xs={1} sm={2} key={image.id}>
              <Box
                sx={{
                  height: 320,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ mt: 1, width: '100%' }} alignItems="end">
        </Stack>
      </Grid>
      <Grid item xs={1} md={7}>
        <Box>
          <Stack direction="row" alignContent="center" justifyContent="space-between">
            <Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography component="div" variant="h5">
                  {props.accommodation.name}
                </Typography>
                <StarsIcon color='primary' />
                <StarsIcon color='primary' />
                <StarsIcon color='primary' />
              </Stack>
              <Stack direction="row" alignItems="center">
                <LocationOnOutlinedIcon color='action' />
                <Typography variant="h6" color="text.secondary" component="div">
                  {props.accommodation.address.city}, {props.accommodation.address.country}
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Rating name="read-only" value={Number(calculateRate(props.accommodation.ratings).value)} precision={0.01} readOnly />
                <Typography variant="h5" color="primary">{calculateRate(props.accommodation.ratings).value}</Typography>
              </Stack>
              <Button variant='contained' size='small' endIcon={<ArrowForwardIosOutlinedIcon />} onClick={() => props.setValue(4)}>Zobacz opinie</Button>
            </Stack>
          </Stack>
          <Stack boxShadow={2} padding={2} mt={3}>
            <Typography variant="subtitle2" gutterBottom sx={{ mt: 2, whiteSpace: 'pre-line' }} >
              {showMore ? props.accommodation.description : `${props.accommodation.description.substring(0, 295)}`}
            </Typography>
            <Button onClick={() => setShowMore(!showMore)} endIcon={showMore ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}>{showMore ? "Pokaż mniej" : "Pokaż więcej"}</Button>
          </Stack>
          <Stack boxShadow={2} padding={2} mt={3}>
            <Typography variant="h6" color="text.secondary">
              Udogodnienia:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
              {
                props.accommodation.facilities.map(facility =>
                  <Chip key={facility.id} label={facility.name} icon={<Icon>{facility.icon}</Icon>}></Chip>
                )}
              <Button variant='outlined' size='small' onClick={() => props.setValue(2)} endIcon={<ArrowForwardIosOutlinedIcon />} sx={{ borderRadius: 24 }}>Zobacz więcej</Button>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'end' }}>
          <Button variant='contained' color="secondary" size='large' sx={{ height: 60 }} onClick={() => props.setValue(1)} fullWidth>Wybierz pokój</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DetailsInfo;
