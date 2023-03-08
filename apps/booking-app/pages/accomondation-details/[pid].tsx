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

export interface AccomondationDetailsProps { }

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
          <Typography>{children}</Typography>
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
    <Container maxWidth="xl" sx={{ mx: 'auto', mt: 4, display: 'flex' }}>
      <Box sx={{ width: '100%' }}>
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
            <Tab label="Informacje i ceny" {...a11yProps(1)} />
            <Tab label="Udogodnienia" {...a11yProps(2)} />
            <Tab label="Zasady pobytu" {...a11yProps(3)} />
            <Tab label="Ważne informacje" {...a11yProps(4)} />
            <Tab label="Opinie gości" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <InformationsAndPrices/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AccommondationFacilities/>
        </TabPanel>
      </Box>
    </Container>
  );
}

export default AccomondationDetails;
