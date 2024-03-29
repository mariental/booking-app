import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import Chip from '@mui/material/Chip';
import AccommondationRoomTable from '../accommondation-room-table/accommondation-room-table';
import { Box, Button, Icon, styled } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-content': {
  },
}));

export interface AccommondationRoomProps {
  room: any;
}

function bedAlert(quantity, bed) {
  let text = "łóżka"
  if (quantity === 1) {
    text = 'łóżko'
  }
  return <Alert severity="info" sx={{ padding: '2px 12px' }} iconMapping={{ info: bed.type === 'łóżko podwójne' ? <BedOutlinedIcon fontSize="inherit" /> : <SingleBedIcon fontSize="inherit" /> }}>{quantity} {bed.type} {text}</Alert>
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
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 1,
              backgroundImage: `url(${props.room.images[0].src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <Stack justifyContent="space-between" ml={2} flexWrap="wrap">
            <Typography variant='h6' my={1}>
              {props.room.name}
            </Typography>
            <Stack direction="row" spacing={2}>
              {props.room.beds.map(item =>
                bedAlert(item.quantity, item.bed)
              )}
            </Stack>
            <Stack direction="row" flexWrap="wrap" my={1}>
              {props.room.facilities.map((item) =>
                item.name === 'Powierzchnia' ?
                  <Chip key={`${item.name}-${item.id}`} label={props.room.size + "m2"} variant="outlined" icon={<Icon>{item.icon}</Icon>} sx={{ m: 0.5 }} />
                  : <Chip key={`${item.name}-${item.id}`} label={item.name} variant="outlined" icon={<Icon>{item.icon}</Icon>} sx={{ m: 0.5 }} />
              )}
            </Stack>
            <Button variant="outlined" endIcon={<ArrowForwardIosOutlinedIcon />} sx={{ width: 210 }}>Zobacz szczegóły</Button>
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <AccommondationRoomTable roomOptions={props.room.roomOptions} room={props.room} />
      </AccordionDetails>
    </Accordion>
  );
}

export default AccommondationRoom;
