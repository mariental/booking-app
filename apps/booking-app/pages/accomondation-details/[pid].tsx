import * as React from 'react';
import { accommodation } from 'apps/booking-app/accomondations';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import DetailsInfo from 'apps/booking-app/components/details-info/details-info';
import InformationsAndPrices from 'apps/booking-app/components/informations-and-prices/informations-and-prices';
import AccommondationFacilities from 'apps/booking-app/components/accommondation-facilities/accommondation-facilities';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import RulesOfStay from 'apps/booking-app/components/rules-of-stay/rules-of-stay';
import GuestReviews from 'apps/booking-app/components/guest-reviews/guest-reviews';
import SearchBar from 'apps/booking-app/components/search-bar/search-bar';
import SearchBarHorizontal from 'apps/booking-app/components/search-bar-horizontal/search-bar-horizontal';
import { styled } from '@mui/material/styles';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props: StyledTabsProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface AccomondationDetailsProps { }

const facilitiesCategories = [
  {
    name: 'Parking',
    details: 'Bezpłatny parking prywatny jest dostępny na miejscu (nie jest konieczna rezerwacja).',
    icon: <LocalParkingOutlinedIcon />
  },
  {
    name: 'Internet',
    details: 'Wi-Fi jest dostępne w pomieszczeniach ogólnodostępnych i jest bezpłatne.',
    icon: <WifiOutlinedIcon />
  },
  {
    name: 'Kuchnia',
    details: '',
    facilities: ['stół', 'płyta kuchenna', 'czajnik elektryczny', 'lodówka', 'aneks kuchenny', 'przybory kuchenne', 'piekarnik', 'pralka'],
    icon: <KitchenOutlinedIcon />
  },
  {
    name: 'Sypialnia',
    details: '',
    facilities: ['pościel', 'szafa lub garderoba ', 'długie łóżka (> 2 metry'],
    icon: <BedOutlinedIcon />
  },
  {
    name: 'Łazienka',
    details: '',
    facilities: ['papier toaletowy', 'ręczniki', 'wanna lub prysznic ', 'prywatna łazienka ', 'toaleta', 'suszarka do włosów', 'bezpłatny zestaw kosmetyków'],
    icon: <BathtubOutlinedIcon />
  },
  {
    name: 'Salon',
    details: '',
    facilities: ['część jadalna', 'kominek', 'sofa'],
    icon: <ChairOutlinedIcon />
  },
  {
    name: 'Media/Technologia',
    details: '',
    facilities: ['telewizor z płaskim ekranem ', 'kanały kablowe ', 'radio', 'telewizor', 'serwis z filmami online (np. Netflix)'],
    icon: <TvOutlinedIcon />

  },
  {
    name: 'Udogodnienia w pokoju',
    details: '',
    facilities: ['gniazdko koło łóżka ', 'suszarka na ubrania ', 'moskitiera ', 'wieszak na ubrania', 'prywatne wejście', 'żelazko'],
    icon: <HotelOutlinedIcon />
  },
  {
    name: 'Zwierzęta',
    details: 'Zwierzęta są akceptowane. Mogą obowiązywać dodatkowe opłaty.',
    icon: <PetsOutlinedIcon />

  },
  {
    name: 'Udogodnienia dla niepełnosprawnych',
    details: '',
    facilities: ['całość dostępna dla wózków inwalidzkich', 'całość zlokalizowana na parterze '],
    icon: <AccessibleOutlinedIcon />

  },
  {
    name: 'Okolica',
    details: '',
    facilities: ['miejsce na piknik ', 'miejsce na ognisko', 'meble ogrodowe', 'stół na świeżym powietrzu', 'sprzęt do grillowania', 'balkon', 'taras', 'ogród'],
    icon: <LocalFloristOutlinedIcon />

  },
  {
    name: 'Bezpieczeństwo',
    details: '',
    facilities: ['czujnik dymu', 'system alarmowy', 'gaśnice', 'monitoring wokół obiektu'],
    icon: <LockOutlinedIcon />

  },
  {
    name: 'Okolica i widok',
    details: '',
    facilities: ['widok na góry ', 'widok na ogród ', 'widok'],
    icon: <ForestOutlinedIcon />
  },
  {
    name: 'Cechy budynku',
    details: '',
    facilities: ['bliźniak', 'wolnostojący'],
    icon: <HouseOutlinedIcon />
  },
  {
    name: 'Usługi recepcji',
    details: '',
    facilities: ['indywidualne zameldowanie / wymeldowanie', 'ekspresowe zameldowanie / wymeldowanie', 'całodobowa recepcja'],
    icon: <StoreOutlinedIcon />
  },
  {
    name: 'Usługi dla rodzin i oferta rozrywkowa',
    details: '',
    facilities: ['plac zabaw dla dzieci', 'książki, DVD lub muzyka dla dzieci', 'gry planszowe / puzzle'],
    icon: <FamilyRestroomOutlinedIcon />
  },
  {
    name: 'Różne',
    details: '',
    facilities: ['całkowity zakaz palenia', 'ogrzewanie', 'pokoje rodzinne', 'pokoje dla niepalących '],
    icon: <ForestOutlinedIcon />
  },
  {
    name: 'Języki',
    details: '',
    facilities: ['angielski', 'polski', 'ukraiński'],
    icon: <ForumOutlinedIcon />
  },
]


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

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function AccomondationDetails(props: AccomondationDetailsProps) {
  const router = useRouter()
  const { pid } = router.query
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  React.useEffect(() => {
    console.log(accommodation.find(item => item.id === pid))
  })

  return (
    <Box sx={{ width: '100%' }}>
      <SearchBarHorizontal/>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Ogólne informacje" {...a11yProps(0)} />
          <Tab label="Pokoje" {...a11yProps(1)} />
          <Tab label="Udogodnienia" {...a11yProps(2)} />
          <Tab label="Zasady pobytu" {...a11yProps(3)} />
          <Tab label="Opinie gości" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          <DetailsInfo/>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          <InformationsAndPrices />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          <AccommondationFacilities facilitiesCategories={facilitiesCategories} />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          <RulesOfStay />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Container maxWidth="xl" sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}>
          <GuestReviews />
        </Container>
      </TabPanel>
    </Box>
  );
}

export default AccomondationDetails;
