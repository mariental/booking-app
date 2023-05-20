import * as React from 'react';
import FacilitiesCategoryWithoutCollapse from '../facilities-category-without-collapse/facilities-category-without-collapse';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export interface AccommondationFacilitiesProps {
  accommodation: any;
}

export function AccommondationFacilities(props: AccommondationFacilitiesProps) {
  const [facilities, setFacilities] = React.useState([]);

  React.useEffect(() => {
    const fac = [];
    for (const room of props.accommodation.rooms) {
      for(const facility of room.facilities) {
        if(!fac.includes(facility)){
          fac.push(facility);
        }
      }
    }
    setFacilities(fac)
  }, []);

  return (
    <>
      <Stack direction="row" justifyContent="flext-start" sx={{ flexWrap: "wrap", gap: 4 }}>
        {facilities.map((item) =>
          item !== undefined ? <FacilitiesCategoryWithoutCollapse facility={item} /> : <FacilitiesCategoryWithoutCollapse facility={item} />
        )}
      </Stack>
    </>
  );
}

export default AccommondationFacilities;
