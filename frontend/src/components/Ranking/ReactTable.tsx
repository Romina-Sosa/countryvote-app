import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TABLE_ROWS} from '../../utils/constans';

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">{TABLE_ROWS.COUNTRY}</TableCell>
            <TableCell align="center">{TABLE_ROWS.CAPITAL_CITY}</TableCell>
            <TableCell align="center">{TABLE_ROWS.REGION}</TableCell>
            <TableCell align="center">{TABLE_ROWS.SUB_REGION}</TableCell>
            <TableCell align="right">{TABLE_ROWS.VOTES}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
