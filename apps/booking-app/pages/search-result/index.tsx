import * as React from 'react';
import Grid from '@mui/material/Grid';
import AccomondationSearchListItem, { calculateRate } from '../../components/accomondation-search-list-item/accomondation-search-list-item';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { Alert, AlertTitle, Box, CircularProgress } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import SearchBarHorizontal from 'apps/booking-app/components/search-bar-horizontal/search-bar-horizontal';
import { useRouter } from 'next/router';
import prisma from '../../lib/prisma';
import { GetStaticProps } from 'next';
import { setReservationInfo } from 'apps/booking-app/store/reservationSlice';
import { useAppDispatch } from 'apps/booking-app/store';

export interface SearchParams {
  location: string,
  checkIn: string,
  checkOut: string,
  adults: number,
  kids: number,
  rooms: number
}

export function SearchResult() {
  const [typesCategories, setTypesCategories] = React.useState([
    {
      name: 'houseForExclusivity',
      value: 'Domy i apartamenty na wyłączność',
      checked: false
    },
    {
      name: 'apartment',
      value: 'Apartament',
      checked: false
    },
    {
      name: 'hotel',
      value: 'Hotel',
      checked: false
    },
    {
      name: 'holidayHouse',
      value: 'Dom wakacyjny',
      checked: false
    }
  ]);
  const [facilitiesCategories, setFacilitiesCategories] = React.useState([
    {
      name: 'wifi',
      label: 'WiFi',
      checked: false
    },
    {
      name: 'bathroom',
      label: 'Prywatna łazienka',
      checked: false
    },
    {
      name: 'panorama',
      label: 'Pokój z widokiem',
      checked: false
    },
    {
      name: 'tv',
      label: 'Telewizor',
      checked: false
    },
    {
      name: 'ac_unit',
      label: 'Klimatyzacja',
      checked: false
    },
    {
      name: 'parking',
      label: 'Parking',
      checked: false
    }
  ])
  const [pricesCategories, setPricesCategories] = React.useState([
    {
      name: 'firstPriceRange',
      value: '1',
      label: '0 zł - 200zł',
      checked: false
    },
    {
      name: 'secondPriceRange',
      value: '2',
      label: '200 zł - 400zł',
      checked: false
    },
    {
      name: 'thirdPriceRange',
      value: '3',
      label: '400 zł - 600zł',
      checked: false
    },
    {
      name: 'fourthPriceRange',
      value: '4',
      label: '600 zł - 800zł',
      checked: false
    },
    {
      name: 'fifthPriceRange',
      value: '5',
      label: '800zł +',
      checked: false
    }
  ])
  const [ratingCategories, setRatingCategories] = React.useState([
    {
      name: 'oneStar',
      value: '1',
      label: '1 gwiazdka',
      checked: false
    },
    {
      name: 'twoStars',
      value: '2',
      label: '2 gwiazdki',
      checked: false
    },
    {
      name: 'threeStars',
      value: '3',
      label: '3 gwiazdki',
      checked: false
    },
    {
      name: 'fourStars',
      value: '4',
      label: '4 gwiazdki',
      checked: false
    },
    {
      name: 'fiveStars',
      value: '5',
      label: '5 gwiazdek',
      checked: false
    }
  ])

  const [sort, setSort] = React.useState('Najpopularniejsze');
  const [accommodations, setAccommondations] = React.useState([]);
  const [filteredAccommondations, setFilteredAccommondations] = React.useState([]);
  const [searchParams, setSearchParams] = React.useState<SearchParams>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const sortOptions = [
    'Najpopularniejsze', 'Cena (od najniższej)', 'Cena (od najwyższej)', 'Ocena obiektu (od najwyższej)', 'Ocena obiektu (od najniższej)'
  ]

  const handleTypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatetypesCategories = typesCategories.map(item => {
      if (item.name === event.target.name) {
        return {
          ...item,
          checked: event.target.checked
        }
      } else {
        return item;
      }
    })
    setTypesCategories(updatetypesCategories);
  };
  const handleFacilitiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatefacilitiesCategories = facilitiesCategories.map(item => {
      if (item.name === event.target.name) {
        return {
          ...item,
          checked: event.target.checked
        }
      } else {
        return item;
      }
    })
    setFacilitiesCategories(updatefacilitiesCategories);
  };
  const handlePricesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatePricesCategories = pricesCategories.map(item => {
      if (item.name === event.target.name) {
        return {
          ...item,
          checked: event.target.checked
        }
      } else {
        return item;
      }
    })
    setPricesCategories(updatePricesCategories);
  };
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updateRatingCategories = ratingCategories.map(item => {
      if (item.name === event.target.name) {
        return {
          ...item,
          checked: event.target.checked
        }
      } else {
        return item;
      }
    })
    setRatingCategories(updateRatingCategories);
  };
  const handleSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.value);
    sortAccommondations(event.target.value);
  }

  const sortAccommondations = (type: string) => {
    switch (type) {
      case "Cena (od najniższej)":
        setFilteredAccommondations(filteredAccommondations.sort((a, b) => a.pricePerNight - b.pricePerNight));
        break;
      case "Cena (od najwyższej)":
        setFilteredAccommondations(filteredAccommondations.sort((a, b) => a.pricePerNight + b.pricePerNight));
        break;
      case "Ocena obiektu (od najniższej)":
        setFilteredAccommondations(filteredAccommondations.sort((a, b) => Number(calculateRate(a.ratings).value) - Number(calculateRate(b.ratings).value)));
        break;
      case "Ocena obiektu (od najwyższej)":
        setFilteredAccommondations(filteredAccommondations.sort((a, b) => Number(calculateRate(a.ratings).quantity) + Number(calculateRate(b.ratings).quantity)));
        break;
      case "Najpopularniejsze":
        setFilteredAccommondations(filteredAccommondations.sort((a, b) => Number(calculateRate(a.ratings).quantity) + Number(calculateRate(b.ratings).quantity)));
        break;
    }
  }

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
    }
  }, [router]);

  const getData = async () => {
    const response = await fetch(`/api/allAccommondations/`, {
      method: "GET"
    });
    return response.json();
  }
  React.useEffect(() => {
    if (searchParams !== null) {
      getData().then((data) => {
        console.log(data)
        setAccommondations(data.filter((item) => item.address.country === searchParams.location));
      });
    }
  }, [searchParams]);

  React.useEffect(() => {
    if (searchParams) {
      dispatch(setReservationInfo({
        destination: searchParams.location,
        checkInDate: searchParams.checkIn,
        checkOutDate: searchParams.checkOut,
        adults: searchParams.adults,
        kids: searchParams.kids
      }));
    }
  }, [searchParams])


  React.useEffect(() => {
    setFilteredAccommondations(accommodations);
  }, [accommodations])

  const applyFilters = () => {
    let filteredData = accommodations;

    const typesChecked = typesCategories
      .filter((item) => item.checked)
      .map((item) => item.value);

    const ratesChecked = ratingCategories
      .filter((item) => item.checked)
      .map((item) => item.value);

    const pricesChecked = pricesCategories
      .filter((item) => item.checked)
      .map((item) => item.value);

    const facilitiesChecked = facilitiesCategories
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (typesChecked.length && !ratesChecked.length && !facilitiesChecked.length) {
      filteredData = filteredData.filter(
        (item) => typesChecked.includes(item.type.name)
      );
    } else if (ratesChecked.length && !typesChecked.length && !facilitiesChecked.length) {
      filteredData = filteredData.filter(
        (item) => ratesChecked.includes((calculateRate(item.ratings).value).charAt(0))
      );
    } else if (facilitiesChecked.length && !ratesChecked.length && !typesChecked.length) {
      filteredData = filteredData.filter(
        (item) => item.facilities.filter((facility) => facilitiesChecked.includes(facility.name)).length !== 0
      );
    } else if (typesChecked.length && ratesChecked.length && !facilitiesChecked.length) {
      filteredData = filteredData.filter(
        (item) =>
          typesChecked.includes(item.type.name) &&
          ratesChecked.includes((calculateRate(item.ratings).value).charAt(0))
      );
    } else if (typesChecked.length && facilitiesChecked.length && !ratesChecked.length) {
      filteredData = filteredData.filter(
        (item) =>
          typesChecked.includes(item.type.name) &&
          item.facilities.filter((facility) => facilitiesChecked.includes(facility.name)).length !== 0
      );
    } else if (ratesChecked.length && facilitiesChecked.length && !typesChecked.length) {
      filteredData = filteredData.filter(
        (item) =>
          ratesChecked.includes((calculateRate(item.ratings).value).charAt(0)) &&
          item.facilities.filter((facility) => facilitiesChecked.includes(facility.name)).length !== 0
      );
    } else if (ratesChecked.length && typesChecked.length && facilitiesChecked.length) {
      filteredData = filteredData.filter(
        (item) =>
          typesChecked.includes(item.type.name) &&
          ratesChecked.includes((calculateRate(item.ratings).value).charAt(0)) &&
          item.facilities.filter((facility) => facilitiesChecked.includes(facility.name)).length !== 0
      );
    }

    setFilteredAccommondations(filteredData);
  }

  React.useEffect(() => {
    applyFilters();
  }, [typesCategories, ratingCategories, facilitiesCategories])

  return (
    <>
      <Container maxWidth="xl" sx={{ mx: 'auto', my: 2 }}>
        {searchParams !== null ?
          <SearchBarHorizontal location={searchParams.location} checkIn={searchParams.checkIn} checkOut={searchParams.checkOut} adults={searchParams.adults} kids={searchParams.kids} rooms={searchParams.rooms} />
          : <></>}
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
                    {typesCategories.map(item =>
                      <FormControlLabel control={<Checkbox name={item.name} value={item.value} checked={item.checked} onChange={handleTypesChange} />} label={item.value} key={item.name} />
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
                    {facilitiesCategories.map((item) =>
                      <FormControlLabel control={<Checkbox name={item.name} value={item.name} checked={item.checked} onChange={handleFacilitiesChange} />} label={item.label} key={item.name} />
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
                    {ratingCategories.map((item) =>
                      <FormControlLabel control={<Checkbox name={item.name} value={item.value} checked={item.checked} onChange={handleRatingChange} />} label={item.label} key={item.name} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              {/*<Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography fontWeight={600}>Cena</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {pricesCategories.map((item) =>
                      <FormControlLabel control={<Checkbox name={item.name} value={item.value} checked={item.checked} onChange={handlePricesChange} />} label={item.label} key={item.name} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>*/}
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
                  onChange={handleSort}
                  fullWidth
                >
                  {sortOptions.map((item) =>
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Stack>
            {accommodations.length === 0 ?
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
                <CircularProgress />
              </Box>
              : <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {
                  filteredAccommondations.length === 0 ?
                    <Alert severity="info" sx={{ mb: 2, width: '100%' }}>
                      <AlertTitle>Brak miejsc dla podanych parametrów</AlertTitle>
                    </Alert> :
                    filteredAccommondations.map((item) =>
                      <AccomondationSearchListItem key={item.id} accommondation={item} searchParams={searchParams} />
                    )
                }
              </Box>
            }
            <Stack alignItems="center">
              <Pagination count={1} shape="rounded" size="large" color="primary" sx={{ alignContent: 'center' }} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>

  );
}

export default SearchResult;
