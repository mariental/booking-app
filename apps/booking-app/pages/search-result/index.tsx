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
import { Alert, AlertTitle, Box, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import SearchBarHorizontal from 'apps/booking-app/components/search-bar-horizontal/search-bar-horizontal';
import { Accommodation } from 'apps/booking-app/store/accomondationSlice';
import { useAppSelector } from 'apps/booking-app/store';
import { useRouter } from 'next/router';

export interface SearchParams {
  location: string,
  checkIn: string,
  checkOut: string,
  adults: number,
  kids: number,
  rooms: number
}

export interface SearchResultProps { }

export function SearchResult(props: SearchResultProps) {
  const [types, setTypes] = React.useState<string[]>([]);
  const [facilities, setFacilities] = React.useState<string[]>([]);
  const [prices, setPrices] = React.useState<string[]>([]);
  const [reviews, setReviews] = React.useState<string[]>([]);
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
      name: 'parking',
      value: 'parking',
      checked: false
    },
    {
      name: 'restaurant',
      value: 'restauracja',
      checked: false
    },
    {
      name: 'petsAllowed',
      value: 'zwierzęta domowe są akceptowane',
      checked: false
    },
    {
      name: 'roomService',
      value: 'obsługa pokoju',
      checked: false
    },
    {
      name: 'WiFi',
      value: 'WiFi',
      checked: false
    }
  ])
  const [pricesCategories, setPricesCategories] = React.useState([
    {
      name: 'firstPriceRange',
      value: '0 zł - 200zł',
      checked: false
    },
    {
      name: 'secondPriceRange',
      value: '200 zł - 400zł',
      checked: false
    },
    {
      name: 'thirdPriceRange',
      value: '400 zł - 600zł',
      checked: false
    },
    {
      name: 'fourthPriceRange',
      value: '600 zł - 800zł',
      checked: false
    },
    {
      name: 'fifthPriceRange',
      value: '800zł +',
      checked: false
    }
  ])
  const [reviewsCategories, setReviewsCategories] = React.useState([
    {
      name: 'oneStar',
      value: '1 gwiazdka',
      checked: false
    },
    {
      name: 'twoStars',
      value: '2 gwiazdki',
      checked: false
    },
    {
      name: 'threeStars',
      value: '3 gwiazdki',
      checked: false
    },
    {
      name: 'fourStars',
      value: '4 gwiazdki',
      checked: false
    },
    {
      name: 'fiveStars',
      value: '5 gwiazdek',
      checked: false
    }
  ])

  const [sort, setSort] = React.useState('');
  const [accommodations, setAccommondations] = React.useState<Accommodation[]>([]);
  const [searchParams, setSearchParams] = React.useState<SearchParams>(null);

  const router = useRouter();

  let allAccommodations: Accommodation[] = useAppSelector((state) => state.accomondation);

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
    if (event.target.checked) {
      setTypes(prevState => [...prevState, event.target.value]);
    } else {
      setTypes(types.filter(type => type !== event.target.value));
    }
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
    if (event.target.checked) {
      setFacilities(prevState => [...prevState, event.target.value]);
    } else {
      setFacilities(facilities.filter(type => type !== event.target.value));
    }
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
    if (event.target.checked) {
      setPrices(prevState => [...prevState, event.target.value]);
    } else {
      setPrices(prices.filter(type => type !== event.target.value));
    }
  };
  const handleReviewsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updateReviewsCategories = reviewsCategories.map(item => {
      if (item.name === event.target.name) {
        return {
          ...item,
          checked: event.target.checked
        }
      } else {
        return item;
      }
    })
    setReviewsCategories(updateReviewsCategories);
    if (event.target.checked) {
      setReviews(prevState => [...prevState, event.target.value]);
    } else {
      setReviews(reviews.filter(type => type !== event.target.value));
    }
  };
  const sortAccommondations = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.value);
    if (event.target.value === 'Cena (od najniższej)') {
      accommodations.sort((a, b) => {
        const nameA = a.pricePerNight;
        const nameB = b.pricePerNight;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    } else if (event.target.value === 'Cena (od najwyższej)') {
      accommodations.sort((a, b) => {
        const nameA = a.pricePerNight;
        const nameB = b.pricePerNight;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      })
    } else if (event.target.value === 'Ocena obiektu (od najniższej)') {
      accommodations.sort((a, b) => {
        const nameA = a.ratings.find(rating => rating.name === 'Overall').value;
        const nameB = b.ratings.find(rating => rating.name === 'Overall').value;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    } else if (event.target.value === 'Ocena obiektu (od najwyższej)') {
      accommodations.sort((a, b) => {
        const nameA = a.ratings.find(rating => rating.name === 'Overall').value;
        const nameB = b.ratings.find(rating => rating.name === 'Overall').value;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      })
    }
  }
  const filterByTypes = (accommondationsToFilter: Accommodation[]) => {
    const filterArray = [];
    types.forEach(accType => {
      console.log(accType)
      filterArray.push(...accommondationsToFilter.filter(acc => acc.type === accType));
    });
    return filterArray;
  }
  const filterByPrices = (accommondationsToFilter: Accommodation[]) => {
    const filterArray = [];
    prices.forEach(accPrice => {
      const limits = accPrice.split("-");
      const limit1 = parseInt(limits[0].replace(/\D/g, ""));
      const limit2 = parseInt(limits[1].replace(/\D/g, ""));
      filterArray.push(...accommondationsToFilter.filter(acc => acc.pricePerNight >= limit1 && acc.pricePerNight <= limit2));
    });
    return filterArray;
  }
  const filterByReviews = (accommondationsToFilter: Accommodation[]) => {
    const filterArray = [];
    reviews.forEach(accReview => {
      const reviewValue = parseInt(accReview.replace(/\D/g, ""));
      filterArray.push(...accommondationsToFilter.filter(acc => Number(String(acc.ratings.find(rating => rating.name === 'Overall').value).charAt(0)) === reviewValue));
    });
    return filterArray;
  }
  const filterByFacilities = (accommondationsToFilter: Accommodation[]) => {
    const filterArray = [];
    facilities.forEach(accFacility => {
      const tmpArr = getData().filter(acc => (acc.facilities.filter(e => e.name === accFacility).length > 0));
      filterArray.push(...tmpArr.filter(e => !filterArray.includes(e)));
    });
    return filterArray;
  }
  const getData = async () => {
    const filteredAccommondations: Accommodation[] = [];
    const accommondationByLocation: Accommodation[] = allAccommodations.filter((item) => item.country === searchParams.location || item.city === searchParams.location);
    const accommondationByGuestNumber: Accommodation[] = [];
    const accommondationByRoomsNumber: Accommodation[] = [];
    accommondationByLocation.forEach(accommondation => {
      if (accommondation.rooms.length >= searchParams.rooms) {
        let guestNumber = searchParams.adults + searchParams.kids;
        accommondation.rooms.forEach(room => {
          if (room.maxPeople >= searchParams.adults + searchParams.kids && accommondationByGuestNumber.find(acc => acc.id === accommondation.id) === undefined) {
            accommondationByGuestNumber.push(accommondation);
          } else if (room.maxPeople <= guestNumber && guestNumber > 0 && accommondationByGuestNumber.find(acc => acc.id === accommondation.id) === undefined && accommondationByRoomsNumber.find(acc => acc.id === accommondation.id) === undefined) {
            accommondationByRoomsNumber.push(accommondation);
            guestNumber -= room.maxPeople;
          }
        })
      }
    })
    filteredAccommondations.push(...accommondationByGuestNumber);
    filteredAccommondations.push(...accommondationByRoomsNumber);
    return filteredAccommondations;
  }

  const setData = async() => {
    setAccommondations(await getData());
  }

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
    }
  }, [router])

  React.useEffect(() => {
    if (searchParams !== null) {
      setData();
    }
  }, [searchParams])


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
                      <FormControlLabel control={<Checkbox name={item.name} value={item.value} checked={item.checked} onChange={handleFacilitiesChange} />} label={item.value} key={item.name} />
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
                    {reviewsCategories.map((item) =>
                      <FormControlLabel control={<Checkbox name={item.name} value={item.value} checked={item.checked} onChange={handleReviewsChange} />} label={item.value} key={item.name} />
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
                    {pricesCategories.map((item) =>
                      <FormControlLabel control={<Checkbox name={item.name} value={item.value} checked={item.checked} onChange={handlePricesChange} />} label={item.value} key={item.name} />
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
                  onChange={sortAccommondations}
                  fullWidth
                >
                  {sortOptions.map((item) =>
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Stack>
            {accommodations.length === 0 ?
              <Alert severity="info" sx={{ mb: 2 }}>
                <AlertTitle>Brak miejsc dla podanych parametrów</AlertTitle>
              </Alert> :
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {
                  accommodations.length === 0 ? <></> :
                    accommodations.map((item) =>
                      <AccomondationSearchListItem key={item.id} accomondation={item} searchParams={searchParams}/>
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
