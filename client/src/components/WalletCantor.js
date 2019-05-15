import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DialogBuy from './DialogBuy'
// import web from '../services/SocketService';


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

let id = 0;
function createData(currency, unit, value, actions) {
  id += 1;
  return { id, currency, unit, value, actions };
}

const rows = [
  createData('siem', 159, 6.0, <DialogBuy></DialogBuy>),
  createData('EUR', 237, 9.0, <Button variant="outlined" color="primary">BUY</Button>),
  createData('USD', 262, 16.0, <Button variant="outlined" color="primary">BUY</Button>),
  createData('CZK', 305, 3.7, <Button variant="outlined" color="primary">BUY</Button>),
];

// const Result = (props) => {
//     const {averageprice, code, name, purchaseprice, sellprice, unit, date} = props.actual
//     console.log(averageprice)
// }

class WalletCantor extends Component {
  // const { classes } = props;
  // const {averageprice, code, name, purchaseprice, sellprice, unit, date} = props.actual
// state = {
//   data: ''
// };
//   componentDidMount() {
//     const data = web.getData();

//     this.setState({
//       data: data
//     });
//   }
render(){
  return <Grid item xs={6}>
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant = "h5"
                  color = "inherit"
                  >
                    Currencies
                </Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.currency}
                </TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      </Grid>
}
    }


WalletCantor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WalletCantor);