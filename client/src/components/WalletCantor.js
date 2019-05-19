import React, {Component} from 'react';
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
import DialogBuy from './DialogBuy'
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
      flexGrow: 1,
  },
  table: {
    minWidth: 700,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class WalletCantor extends Component {

  componentDidMount() {
    console.log("UPDATE!");
  }

  render(){
  if (!this.props.messages.length) return null

  let dateToFormat = (this.props.messages[6]);
  let date = dateToFormat.slice(0, 10);
  let hour = dateToFormat.slice(11,19);

  return <Grid item xs={6}>
      <Paper>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h5" color="inherit">Currencies</Typography></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Purchase value</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(this.props.messages.slice(0,5)).map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.Code}</TableCell>
                <TableCell align="right">{row.Unit}</TableCell>
                <TableCell align="right">{row.PurchasePrice}</TableCell>
                <TableCell align="right"><DialogBuy id={row.id}></DialogBuy></TableCell>
              </TableRow>
            ))}
          <TableRow>
            <TableCell><Typography variant="h6">Date of data collection: {date} <br></br> Time of data collection: {hour}</Typography></TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </Paper>
      </Grid>
  }
}

WalletCantor.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => {
  return store;
}

const ConnectedWalletCantor = connect(mapStateToProps,null)(WalletCantor)
export default withStyles(styles)(ConnectedWalletCantor);