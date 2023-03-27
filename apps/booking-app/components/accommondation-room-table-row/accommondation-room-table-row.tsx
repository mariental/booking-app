import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Checkbox } from '@mui/material';

export interface AccommondationRoomTableRowProps {
  row: any;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function AccommondationRoomTableRow(props: AccommondationRoomTableRowProps) {
  return (
    <StyledTableRow
      key={props.row.numberOfPeople}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <StyledTableCell component="th" scope="row">
        <Stack direction="row" spacing={1}>
          <Typography variant='subtitle2'>{props.row.numberOfPeople}</Typography>
          {[...Array(props.row.numberOfPeople)].map((x, i) =>
            <Person2OutlinedIcon fontSize='small' />
          )}
        </Stack>
      </StyledTableCell>
      <StyledTableCell align="right">
        {props.row.options.map(option =>
          <Typography variant='subtitle2'>{option}</Typography>
        )}
      </StyledTableCell>
      <StyledTableCell align="right">
        <Typography variant='h6' fontWeight={600}>{props.row.price} zł</Typography>
        <Typography variant="caption" color="text.secondary"> Zawiera opłaty i podatki </Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Checkbox
          aria-label='choose-room'
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default AccommondationRoomTableRow;
