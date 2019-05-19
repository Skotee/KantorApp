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
import DialogSell from './DialogSell'
import { connect } from 'react-redux';

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

class WalletUser extends Component {
render()
{
    console.log(this.props.messages);
return (
      <Grid item xs={6}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant = "h5" color = "inherit">My wallet</Typography>
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
            {(this.props.messages.slice(0,5)).map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.Code}</TableCell>
                <TableCell align="right">{row.SellPrice}</TableCell>
                <TableCell align="right">{this.props.myCurrenciesAmount[2].Amount}</TableCell>
                <TableCell align="right">{this.props.myCurrenciesValue[2].Value}</TableCell>
                <TableCell align="right"><DialogSell id={row.id}></DialogSell></TableCell>
              </TableRow>
            ))}
             <TableRow>
              <TableCell><Typography variant="h6">Available PLN: {this.props.walletPLN}</Typography></TableCell>
              </TableRow>
            </TableBody>
        </Table>
      </Paper>
      </Grid>
  );
}
}

WalletUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => {
  return store;
}

const ConnectedWalletUser = connect(
  mapStateToProps,
  null
)(WalletUser)

export default withStyles(styles)(ConnectedWalletUser);