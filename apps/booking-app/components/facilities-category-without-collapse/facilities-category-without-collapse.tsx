import * as React from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";


interface facility {
  name: string;
  details?: string;
  facilities?: string[];
  icon: React.ReactElement;
}

export interface FacilitiesCategoryWithoutCollapseProps {
  facility: facility;
}

export function FacilitiesCategoryWithoutCollapse(props: FacilitiesCategoryWithoutCollapseProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="family" sx={{ bgcolor: blue[600] }}>
            {props.facility.icon}
          </Avatar>
        }
        title={props.facility.name}
        subheader={props.facility.details}
        titleTypographyProps={{ variant: 'h6' }}
        sx={{ fontSize: 35 }}
      />
    </Card>
  );
}

export default FacilitiesCategoryWithoutCollapse;
