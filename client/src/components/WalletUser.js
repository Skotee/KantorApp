import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DialogSell from './DialogSell'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let pln = 1500;

let id = 0;
function createData(name, unitprice, amount, value, actions) {
  id += 1;
  return { id, name, unitprice, amount, value, actions };
}

const rows = [
  createData('GBP', 159, 6.0, 2, <DialogSell></DialogSell>),
  createData('EUR', 237, 9.0, 2, <DialogSell></DialogSell>),
  createData('USD', 262, 16.0, 2, <DialogSell></DialogSell>),
  createData('CZK', 305, 3.7, 2, <DialogSell></DialogSell>),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
      <Grid item xs={6}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant = "h5"
                  color = "inherit"
                  className = {classes.grow} >
                My wallet
                </Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Unit price</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.unitprice}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">{row.actions}</TableCell>
              </TableRow>
            ))}
             <TableRow>
                Available PLN: {pln}
              </TableRow>
            </TableBody>
        </Table>
      </Paper>
      </Grid>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);