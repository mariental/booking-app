import * as React from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/system/Box';
import AppBar from '@mui/material/AppBar';
import DetailsInfo from 'apps/booking-app/components/details-info/details-info';
import InformationsAndPrices from 'apps/booking-app/components/informations-and-prices/informations-and-prices';
import AccommondationFacilities from 'apps/booking-app/components/accommondation-facilities/accommondation-facilities';
import RulesOfStay from 'apps/booking-app/components/rules-of-stay/rules-of-stay';
import GuestReviews from 'apps/booking-app/components/guest-reviews/guest-reviews';
import SearchBarHorizontal from 'apps/booking-app/components/search-bar-horizontal/search-bar-horizontal';
import { SearchParams } from '../search-result';
import { styled } from "@mui/material/styles";
import { CircularProgress } from '@mui/material';
import { useAppDispatch } from 'apps/booking-app/store';
import { setAccommondationInfo, setReservationInfo } from 'apps/booking-app/store/reservationSlice';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  '&.Mui-selected': {
    color: '#000',
    backgroundColor: theme.palette.secondary.main
  },
}));

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function AccomondationDetails() {
  const [value, setValue] = React.useState(0);
  const [accommodation, setAccommodation] = React.useState(null)
  const [rooms, setRooms] = React.useState([])
  const [reviews, setReviews] = React.useState<any[]>([]);
  const [accRatings, setAccRatings] = React.useState<any[]>([]);
  const [pid, setPid] = React.useState<string>();
  const [searchParams, setSearchParams] = React.useState<SearchParams>(null);

  const router = useRouter();

  const getAccommondation = async () => {
    const resonse = await fetch(`/api/accommondation/${pid}`, {
      method: "GET"
    });
    return resonse.json();
  }

  const getRooms = async () => {
    const resonse = await fetch(`/api/accommondation/rooms/${pid}`, {
      method: "GET"
    });
    return resonse.json();
  }
  const getReviews = async () => {
    const resonse = await fetch(`/api/accommondation/reviews/${pid}`, {
      method: "GET"
    });
    return resonse.json();
  }
  const getRatings = async () => {
    const resonse = await fetch(`/api/accommondation/ratings/${pid}`, {
      method: "GET"
    });
    return resonse.json();
  }

  React.useEffect(() => {
    if (pid) {
      getAccommondation().then((accommondations) => {
        setAccommodation(accommondations);
        getRooms().then((rooms) => {
          setRooms(rooms);
          getReviews().then((reviews) => {
            setReviews(reviews);
            getRatings().then((ratings) => setAccRatings(ratings));
          });
        });
      });
    }
  }, [pid])

  React.useEffect(() => {
    if (router.isReady) {
      setSearchParams({
        location: router.query.location.toString(),
        checkIn: router.query.checkIn.toString(),
        checkOut: router.query.checkOut.toString(),
        adults: parseInt(router.query.adults.toString()),
        kids: parseInt(router.query.kids.toString()),
        rooms: parseInt(router.query.rooms.toString()),
      });
      let { pid } = router.query;
      setPid(pid.toString());
    }
  }, [router])


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {searchParams !== null ?
        <SearchBarHorizontal location={searchParams.location} checkIn={searchParams.checkIn} checkOut={searchParams.checkOut} adults={searchParams.adults} kids={searchParams.kids} rooms={searchParams.rooms} />
        : <></>}
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <StyledTab label="Ogólne informacje" {...a11yProps(0)} />
          <StyledTab label="Pokoje" {...a11yProps(1)} />
          <StyledTab label="Udogodnienia" {...a11yProps(2)} />
          <StyledTab label="Zasady pobytu" {...a11yProps(3)} />
          <StyledTab label="Opinie gości" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          {
            accommodation ? <DetailsInfo accommodation={accommodation} setValue={setValue} />
              :
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
          }
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          {
            accommodation && rooms ? <InformationsAndPrices
              rooms={rooms}
              accommondationName={accommodation.name}
              accommondationCity={accommodation.address.city}
              accommondationCountry={accommodation.address.country}
            /> :
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
          }
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          {
            rooms ? <AccommondationFacilities rooms={rooms} /> :
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
          }
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          <RulesOfStay />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          {
            reviews && accRatings ? <GuestReviews reviews={reviews} ratings={accRatings} /> :
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
          }
        </Container>
      </TabPanel>
    </Box>
  );
}

export default AccomondationDetails;
