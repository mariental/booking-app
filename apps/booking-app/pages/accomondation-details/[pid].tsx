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
import prisma from 'apps/booking-app/lib/prisma';
import { GetServerSideProps } from 'next';
import styled from '@emotion/styled';

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

export const getServerSideProps: GetServerSideProps  = async ({ params }) => {
  const acc = await prisma.accommodation.findFirst({
    where: {
      id: Number(params?.pid.toString()),
    },
    include: {
      address: true,
      images: true,
      rooms: {
        include: {
          images: true,
          beds: {
            include: {
              bed: true
            }
          },
          facilities: true,
          roomOptions: {
            include: {
              cancellationType: true,
              mealType: true
            }
          }
        }
      },
      ratings: true,
      reviews: {
        include: {
          author: true,
          reservation: {
            include : {
              roomOption: {
                select : {
                  room: {
                    select: {
                      name: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      facilities: true
    }
  });
  return {
    props: { acc: { ...acc, reviews: JSON.parse(JSON.stringify(acc.reviews)) } },
  };
};

export function AccomondationDetails({acc}) {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [accommodation, setAccommodation] = React.useState()
  const [pid, setPid] = React.useState<string>();
  const [searchParams, setSearchParams] = React.useState<SearchParams>(null);

  React.useEffect(() => {
    if (pid) {
      setAccommodation(acc)
    }
  }, [pid])

  React.useEffect(() => {
    if (router.isReady) {
      setSearchParams({
        location: router.query.location.toString(),
        checkIn: router.query.checkIn.toString(),
        checkOut: router.query.checkOut.toString(),
        adults: parseInt(router.query.adults.toString()),
        kids: parseInt(router.query.rooms.toString()),
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
          variant="fullWidth"
          aria-label="full width tabs example"
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
            accommodation === undefined ? <></> : <DetailsInfo accommodation={accommodation} setValue={setValue}/>
          }
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          {
            accommodation === undefined ? <></> : <InformationsAndPrices accommodation={accommodation} searchParams={searchParams}/>
          }
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          <AccommondationFacilities accommodation={accommodation} />
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
            accommodation === undefined ? <></> : <GuestReviews accommodation={accommodation}/>
          }
        </Container>
      </TabPanel>
    </Box>
  );
}

export default AccomondationDetails;
