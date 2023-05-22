import * as React from 'react';
import FacilitiesCategoryWithoutCollapse from '../facilities-category-without-collapse/facilities-category-without-collapse';
import Stack from '@mui/material/Stack';

export interface AccommondationFacilitiesProps {
  rooms: any;
}

export function AccommondationFacilities(props: AccommondationFacilitiesProps) {
  const [rooms, setRooms] = React.useState([]);
  const [facilities, setFacilities] = React.useState([]);

  React.useEffect(() => {
    setRooms(props.rooms);
  })


  React.useEffect(() => {
    const fac = [];
    for (const room of rooms) {
      for(const facility of room.facilities) {
        if(!fac.includes(facility)){
          fac.push(facility);
        }
      }
    }
    setFacilities(fac)
  }, [rooms]);

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
