import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import Chip from '@mui/material/Chip';
import AccommondationRoomTable from '../accommondation-room-table/accommondation-room-table';


interface bed {
  type: string;
  quantity: number;
}

export interface AccommondationRoomProps {
  name: string;
  facilities: string[];
  moreFacilties: string[];
  beds: bed[];
}

function bedAlert(b: bed) {
  let text = "łóżka"
  if (b.quantity === 1) {
    text = 'łóżko'
  }
  return <Alert severity="info" iconMapping={{ info: b.type === 'łóżko podwójne' ? <BedOutlinedIcon fontSize="inherit" /> : <SingleBedIcon fontSize="inherit" /> }}>{b.quantity} {b.type} {text}</Alert>
}

export function AccommondationRoom(props: AccommondationRoomProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ boxShadow: 1 }}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {props.name}
        </Typography>
        <Stack direction="row" spacing={2}>
          {props.beds.map(bed =>
            bedAlert(bed)
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
      <Stack direction="row" sx={{ flexWrap: 'wrap'}}>
            <Chip label={'WiFi'} variant="outlined" sx={{ m: 0.5 }} />
            <Chip label={'telewizor'} variant="outlined" sx={{ m: 0.5 }} />
            <Chip label={'łazienka'} variant="outlined" sx={{ m: 0.5 }} />
            <Chip label={'30m2'} variant="outlined" sx={{ m: 0.5 }} />
            <Chip label={'klimatyzacja'} variant="outlined" sx={{ m: 0.5 }} />
        </Stack>
        <AccommondationRoomTable />
      </AccordionDetails>
    </Accordion>
  );
}

export default AccommondationRoom;
