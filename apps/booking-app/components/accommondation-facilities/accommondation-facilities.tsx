import * as React from 'react';
import FacilitiesCategoryWithoutCollapse from '../facilities-category-without-collapse/facilities-category-without-collapse';
import FacilitiesCategoryCollapse from '../facilities-category-collapse/facilities-category-collapse';
import Stack from '@mui/material/Stack';

interface facility {
  name: string;
  details?: string;
  facilities?: string[];
  icon: React.ReactElement;
}

export interface AccommondationFacilitiesProps {
  facilitiesCategories: facility[];
}

export function AccommondationFacilities(props: AccommondationFacilitiesProps) {
  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" sx={{ flexWrap: "wrap", gap: 2 }} spacing={3}>
      {props.facilitiesCategories.map((item) =>
        item.facilities !== undefined ? <FacilitiesCategoryCollapse facility={item} /> : <FacilitiesCategoryWithoutCollapse facility={item} />
      )}
    </Stack>
  );
}

export default AccommondationFacilities;
