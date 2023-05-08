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
import { RoomOption } from 'apps/booking-app/store/accomondationSlice';
import { useAppSelector } from 'apps/booking-app/store';
import { selectRoomsOptions } from 'apps/booking-app/store/reservationSlice';

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
  roomId: string;
  roomOptions: RoomOption[];
}

export function AccommondationRoomTable(props: AccommondationRoomTableProps) {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  
  const roomsOptions: RoomOption[] = useAppSelector(selectRoomsOptions);

  React.useEffect(() => {
    if (roomsOptions.length > 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    console.log(roomsOptions);
  })
  
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
          {props.roomOptions.map((row) => (
            <AccommondationRoomTableRow roomId={props.roomId} row={row} disabled={disabled}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AccommondationRoomTable;
