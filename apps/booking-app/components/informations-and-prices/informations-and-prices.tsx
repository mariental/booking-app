import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';

export interface InformationsAndPricesProps { }

const facilities = [
  '1 domek na wyłączność',
  '70 m²',
  'Prywatna kuchnia',
  'prywatna łazienka',
  'widok na ogród',
  'widok na góry',
  'zmywarka',
  'telewizor z płaskim ekranem',
  'taras',
  'ekspres do kawy',
]

const moreFacilties = [
  'toaleta', 'sofa', 'wanna lub prysznic', 'ręczniki', 'pościel', 'środki czystości', 'przyjazny alergikom', 'prywatne wejście', 'telewizor', 'lodówka', 'moskitiera', 'kuchenka mikrofalowa', 'ogrzewanie', 'suszarka do włosów', 'przybory kuchenne', 'aneks kuchenny', 'długie łóżka (> 2 metry)', 'czajnik elektryczny', 'meble ogrodowe', 'stół na świeżym powietrzu', ' szafa lub garderoba', 'płyta kuchenna', 'stół', 'całość zlokalizowana na parterze', 'wieszak na ubrania', 'papier toaletowy', 'rozkładana sofa', 'żel antybakteryjny'
]

export function InformationsAndPrices(props: InformationsAndPricesProps) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ boxShadow: 1}}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Domek z 3 sypialniami
          </Typography>
          <Stack direction="row" spacing={2}>
            <Alert severity="info" iconMapping={{ info: <BedOutlinedIcon fontSize="inherit" /> }}>1 łóżko podwójne</Alert>
            <Alert severity="info" iconMapping={{ info: <SingleBedIcon fontSize="inherit" /> }}>1 łóżko pojedyncze</Alert>
            <Alert severity="info" iconMapping={{ info: <WeekendOutlinedIcon fontSize="inherit" /> }}> 1 rozkładana sofa</Alert>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2} sx={{ mb: 2, maxWidth: 600 }}>
            <Alert variant="outlined" severity="success" icon={false}>
              Polecany dla 2 dorosłych, 1 dziecka
            </Alert>
            <Alert variant="outlined" severity="error" icon={false}>
              Został tylko 1 pokój na naszej stronie
            </Alert>
          </Stack>
          <Stack direction="row" spacing={2}>
            {facilities.map((item) =>
              <Chip label={item} variant="outlined" />
            )}
          </Stack>
          <Accordion sx={{ mt: 2, maxWidth: 500 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Dodatki
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {moreFacilties.map((item) =>
                <Chip label={item} sx={{ m: 1 }} size="small" />
              )}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Domek z 4 sypialniami
          </Typography>
          <Stack direction="row" spacing={2}>
            <Alert severity="info" iconMapping={{ info: <BedOutlinedIcon fontSize="inherit" /> }}>2 łóżka podwójne</Alert>
            <Alert severity="info" iconMapping={{ info: <SingleBedIcon fontSize="inherit" /> }}>1 łóżko pojedyncze</Alert>
            <Alert severity="info" iconMapping={{ info: <WeekendOutlinedIcon fontSize="inherit" /> }}> 1 rozkładana sofa</Alert>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default InformationsAndPrices;
