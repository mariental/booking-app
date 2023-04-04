import * as React from 'react';
import Grid from '@mui/material/Grid';
import AccomondationSearchListItem from '../../components/accomondation-search-list-item/accomondation-search-list-item';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { Box, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import { Theme, useTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import SearchBarHorizontal from 'apps/booking-app/components/search-bar-horizontal/search-bar-horizontal';
import { Accommodation } from 'apps/booking-app/store/accomondationSlice';
import { useAppSelector } from 'apps/booking-app/store';
import { useRouter } from 'next/router';

const category = [
  'Domy i apartamenty na wyłączność', 'Apartament', 'Hotel', 'Dom wakacyjny'
]
const facilities = [
  'parking', 'restauracja', 'zwierzęta domowe są akceptowane', 'obsługa pokoju', 'bezpłatne WiFi'
]
const reviews = [
  '1 gwiazdka', '2 gwiazdki', '3 gwiazdki', '4gwiazdki', '5 gwiazdek'
]
const prices = [
  '0 zł - 200zł', '200 zł - 400zł', '400 zł - 600zł', '600 zł - 800zł', '800zł +'
]
const sortOptions = [
  'Najpopularniejsze', 'Cena (od najniższej)', 'Cena (od najwyższej)', 'Ocena obiektu (od najwyższej)', 'Ocena obiektu (od najniższej)'
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export interface SearchResultProps { }

export function SearchResult(props: SearchResultProps) {
  const [type, setType] = React.useState<string[]>([]);
  const [sort, setSort] = React.useState('');
  const [accommodations, setAccommondations] = React.useState<Accommodation[]>([]);

  const theme = useTheme();
  const router = useRouter();
  const { location, checkIn, checkOut, adults, kids, rooms } = router.query;

  let allAccommodations: Accommodation[] = useAppSelector((state) => state.accomondation);

  const handleChange = (event: SelectChangeEvent<typeof type>) => {
    const {
      target: { value },
    } = event;
    setType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function containsObject(obj, array) {
    var i;
    for (i = 0; i < array.length; i++) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
  }

  React.useEffect(() => {
    const accommondationByLocation: Accommodation[] = allAccommodations.filter((item) => item.country === location || item.city === location);
    const accommondationByGuestNumber: Accommodation[] = [];
    const accommondationByRoomsNumber: Accommodation[] = [];
    if (typeof adults === 'string' && typeof kids === 'string' && typeof rooms === 'string') {
      accommondationByLocation.forEach(accommondation => {
        if (accommondation.rooms.length >= parseInt(rooms)) {
          let guestNumber = parseInt(adults) + parseInt(kids)
          accommondation.rooms.forEach(room => {
            if (room.maxPersons >= parseInt(adults) + parseInt(kids) && accommondationByGuestNumber.find(acc => acc.id === accommondation.id) === undefined) {
              accommondationByGuestNumber.push(accommondation);
            } else if (room.maxPersons <= guestNumber && guestNumber > 0  && accommondationByGuestNumber.find(acc => acc.id === accommondation.id) === undefined && accommondationByRoomsNumber.find(acc => acc.id === accommondation.id) === undefined) {
              accommondationByRoomsNumber.push(accommondation);
              guestNumber -= room.maxPersons;
            }
          })
        }
      })
    }
    setAccommondations(prevState => [...prevState, ...accommondationByGuestNumber]);
    setAccommondations(prevState => [...prevState, ...accommondationByRoomsNumber]);
    console.log(accommodations);
  }, [location, checkIn, checkOut, adults, kids, rooms])

  return (
    <>
      <Container maxWidth="xl" sx={{ mx: 'auto', my: 2 }}>
        <SearchBarHorizontal />
        <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 1, md: 12 }} sx={{ justifyContent: 'center', position: 'relative', marginTop: 2 }}>
          <Grid item xs={1} md={3}>
            <Stack sx={{ position: 'sticky', top: 20 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography fontWeight={600}>Rodzaj obiektu</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {category.map((item) =>
                      <FormControlLabel control={<Checkbox name={item} value={item} />} label={item} key={item} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography fontWeight={600}>Udogodnienia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {facilities.map((item) =>
                      <FormControlLabel control={<Checkbox name={item} value={item} />} label={item} key={item} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography fontWeight={600}>Ocena</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {reviews.map((item) =>
                      <FormControlLabel control={<Checkbox name={item} value={item} />} label={item} key={item} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography fontWeight={600}>Cena</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {prices.map((item) =>
                      <FormControlLabel control={<Checkbox name={item} value={item} />} label={item} key={item} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
          <Grid item xs={1} md={8}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={0} sx={{ mb: 2 }}>
              <FormControl sx={{ m: 1, minWidth: 250, margin: 0 }}>
                <InputLabel id="demo-simple-select-label">Sortuj według</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sortuj według"
                  onChange={(e) => setSort(e.target.value)}
                  fullWidth
                >
                  {sortOptions.map((item) =>
                    <MenuItem value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              {
                accommodations.length === 0 ? <></> :
                  accommodations.map((item) =>
                    <AccomondationSearchListItem key={item.id} accomondation={item} />
                  )
              }
            </Box>
            <Stack alignItems="center">
              <Pagination count={10} shape="rounded" size="large" color="primary" sx={{ alignContent: 'center' }} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>

  );
}

export default SearchResult;
