import * as React from 'react';
import Grid from '@mui/material/Grid';
import { accommodation } from '../../accomondations';
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
import ListItemText from '@mui/material/ListItemText';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Pagination from '@mui/material/Pagination';
import SearchBar from 'apps/booking-app/components/search-bar/search-bar';
import SearchBarHorizontal from 'apps/booking-app/components/search-bar-horizontal/search-bar-horizontal';

const category = [
  'Domy i apartamenty na wyłączność', 'Apartamenty', 'Hotele', 'Domy wakacyjne', 'Kwatery prywatne'
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
  'Wybrane przez nas', 'Najpierw domy potem apartamenty', 'Cena (od najniższej)', 'Najlepsza ocena i najniższa cena', 'Cena (od najwyższej)',
  'Ocena obiektu (od najwyższej)', 'Ocena obiektu (od najniższej)', 'Ocena obiektu i cena', 'Odległość od wybranego miejsca', 'Najczęściej i najlepiej oceniane'
]

const types = [
  'Hotele',
  'Domy wakacyjne',
  'Styl apartamentowy',
  'Miejsce współdzielone',
  'Pobyt na łonie natury'
];

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
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof type>) => {
    const {
      target: { value },
    } = event;
    setType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <SearchBarHorizontal />
      <Container maxWidth="xl" sx={{ mx: 'auto', my: 4 }}>
        <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 1, md: 12 }} sx={{ justifyContent: 'center', position: 'relative' }}>
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
              <FormControl sx={{ m: 1, width: 300, margin: 0 }} size="small">
                <InputLabel id="demo-simple-select-label">Typ obiektu</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={type}
                  onChange={handleChange}
                  input={<OutlinedInput label="Typ obiektu" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {types.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 150, margin: 0 }} size="small">
                <InputLabel id="demo-simple-select-label">Sortuj według</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sortuj według"
                  onChange={(e) => setSort(e.target.value)}
                >
                  {sortOptions.map((item) =>
                    <MenuItem value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              {accommodation.map((item) =>
                <AccomondationSearchListItem accomondation={item} />
              )}
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
