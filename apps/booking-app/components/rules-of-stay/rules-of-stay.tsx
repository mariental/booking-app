import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SmokeFreeOutlinedIcon from '@mui/icons-material/SmokeFreeOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import Slider from '@mui/material/Slider';

export interface RulesOfStayProps { }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1)
}));

function valuetext(value: number) {
  return `${value}`;
}

const marks = [
  {
    value: 62,
    label: '15.00',
  },
  {
    value: 93,
    label: '23.30',
  }
];

const marks2 = [
  {
    value: 25,
    label: '06.00',
  },
  {
    value: 46,
    label: '11.00',
  }
];

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    color: '#52af77',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    color: '#52af77',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export function RulesOfStay(props: RulesOfStayProps) {
  const [value, setValue] = React.useState<number[]>([62, 93]);
  const [value2, setValue2] = React.useState<number[]>([25, 46]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <Stack direction="row" spacing={1} alignItems="center">
            <LoginIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Zameldowanie
            </Typography>
            <Box sx={{ width: 300 }}>
              <PrettoSlider
                getAriaLabel={() => 'Hours range'}
                value={value}
                getAriaValueText={valuetext}
                marks={marks}
                disabled
              />
            </Box>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" spacing={1} alignItems="center">
            <LogoutIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Wymeldowanie
            </Typography>
            <Box sx={{ width: 300 }}>
              <PrettoSlider
                getAriaLabel={() => 'Hours range'}
                value={value2}
                getAriaValueText={valuetext}
                marks={marks2}
                disabled
              />
            </Box>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" spacing={1} alignItems="center">
            <InfoOutlinedIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Odwołanie rezerwacji/przedpłata
            </Typography>
            <Typography variant="body2">
              Zasady dotyczące przedpłaty i anulowania rezerwacji różnią się w zależności od rodzaju apartamentu. Przy wyborze apartamentu powyżej zapoznaj się z warunkami.
            </Typography>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <FamilyRestroomOutlinedIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Zakwaterowanie dzieci
            </Typography>
            <Stack>
              <Typography variant="body2" fontWeight="600">
                Zasady dotyczące pobytu dzieci
              </Typography>
              <Typography variant="body2">
                Dzieci w każdym wieku są mile widziane.
              </Typography>
              <Typography variant="body2">
                Aby zobaczyć dokładne ceny oraz informacje o liczbie Gości, dodaj do wyszukiwania liczbę oraz wiek dzieci, z którymi podróżujesz.
              </Typography>
              <Typography variant="body2" fontWeight="600">
                Zasady dotyczące łóżeczek dziecięcych i dodatkowych łóżek
              </Typography>
              <Typography variant="body2">
                Łóżeczka dziecięce i dodatkowe łóżka nie są dostępne w tym obiekcie.
              </Typography>
            </Stack>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" spacing={1} alignItems="center">
            <BoyOutlinedIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Brak ograniczeń wiekowych
            </Typography>
            <Typography variant="body2">
              Brak ograniczeń wiekowych przy zameldowaniu
            </Typography>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" spacing={1} alignItems="center">
            <SmokeFreeOutlinedIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Palenie tytoniu
            </Typography>
            <Typography variant="body2">
              Palenie jest zabronione.
            </Typography>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" spacing={1} alignItems="center">
            <CelebrationOutlinedIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Imprezy
            </Typography>
            <Typography variant="body2">
              Organizacja imprez i przyjęć jest zabroniona
            </Typography>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" spacing={1} alignItems="center">
            <PetsOutlinedIcon />
            <Typography variant="subtitle2" fontWeight="600" minWidth={250}>
              Zwierzęta
            </Typography>
            <Typography variant="body2">
              Zwierzęta są akceptowane. Mogą obowiązywać dodatkowe opłaty.
            </Typography>
          </Stack>
        </Item>
      </Stack>
    </Box>
  );
}

export default RulesOfStay;
