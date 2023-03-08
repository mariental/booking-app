import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AccommondationRoomTableRow from '../accommondation-room-table-row/accommondation-room-table-row';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function BasicSelect() {
  const [number, setNumber] = React.useState('0');

  const handleChange = (event: SelectChangeEvent) => {
    setNumber(event.target.value as string);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        labelId="select-rooms-number-label"
        id="select-rooms-number"
        value={number}
        onChange={handleChange}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
      </Select>
    </FormControl>
  );
}

function createData(
  numberOfPeople: number,
  price: number,
  options: string[],
  select: React.ReactElement
) {
  return { numberOfPeople, price, options, select };
}

const rows = [
  createData(1, 155, ['Oferta bezzwrotna', 'Zapłać z wyprzedzeniem'], <BasicSelect />),
  createData(2, 236, ['Bezpłatne odwołanie do godz. 23:59 w dniu 18 kwietnia 2023', 'Nie płacisz nic do 16 kwietnia 2023'], <BasicSelect />),
];

export interface AccommondationRoomTableProps { }

export function AccommondationRoomTable(props: AccommondationRoomTableProps) {
  return (
    <TableContainer component={Paper} sx={{ my: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dla</StyledTableCell>
            <StyledTableCell align="right">Dzisiejsza cena</StyledTableCell>
            <StyledTableCell align="right">Twoje opcje</StyledTableCell>
            <StyledTableCell align="right">Wybierz liczbę</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <AccommondationRoomTableRow row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AccommondationRoomTable;
