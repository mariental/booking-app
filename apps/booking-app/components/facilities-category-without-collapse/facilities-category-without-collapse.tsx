import * as React from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { Icon } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 300, flexGrow: 1 }}>
      <CardHeader
        avatar={
          <Avatar aria-label={props.facility.name} sx={{ bgcolor: theme.palette.primary.main}}>
            <Icon>{props.facility.icon}</Icon>
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
