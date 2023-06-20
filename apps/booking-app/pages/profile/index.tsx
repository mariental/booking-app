import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { auth } from 'apps/booking-app/firebase/firebaseApp';
import { styled } from '@mui/material/styles';
import { Box, Tab, AppBar, Tabs, Container } from '@mui/material';
import Dashboard from 'apps/booking-app/components/dashboard/dashboard';
import UserReviews from 'apps/booking-app/components/user-reviews/user-reviews';

export interface ProfileProps {}

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    backgroundColor: theme.palette.secondary.main,
  },
}));

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function Profile(props: ProfileProps) {
  const [value, setValue] = React.useState(0);

  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!user) {
    router.push('/');
  } else {
    return (
      <Box sx={{ width: '100%' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            aria-label="user profile tabs"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <StyledTab label="Mój profil" {...a11yProps(0)} />
            <StyledTab label="Opinie" {...a11yProps(1)} />
            <StyledTab label="Lista ulubionych" {...a11yProps(2)} />
            <StyledTab label="Ustawienia" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Container
            maxWidth="xl"
            sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}
          >
            <Dashboard setValue={setValue} />
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Container
            maxWidth="xl"
            sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}
          >
            <UserReviews />
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
        <TabPanel value={value} index={3}>
          <Container
            maxWidth="xl"
            sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}
          ></Container>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Container
            maxWidth="xl"
            sx={{ mx: 'auto', display: 'flex', flexDirection: 'column' }}
          ></Container>
        </TabPanel>
      </Box>
    );
  }
}

export default Profile;
