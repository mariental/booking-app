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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export interface AccommondationRoomTableProps { 
  room: any;
  roomOptions: any[];
}

export function AccommondationRoomTable(props: AccommondationRoomTableProps) {
  const [roomOptions, setRoomOptions] = React.useState<any[]>([])

  React.useEffect(() => {
    const arrayToSort = [...props.roomOptions];
    setRoomOptions(arrayToSort.sort((firstItem, secondItem) => parseFloat(firstItem.price) - parseFloat(secondItem.price)));
  }, []);

  return (
    <TableContainer component={Paper} sx={{ my: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Liczba osób</StyledTableCell>
            <StyledTableCell align="right">Opcje pokoju</StyledTableCell>
            <StyledTableCell align="right">Dzisiejsza cena</StyledTableCell>
            <StyledTableCell align="right">Wybierz pokój</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roomOptions.map((row) => (
            <AccommondationRoomTableRow row={row} room={props.room}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AccommondationRoomTable;
