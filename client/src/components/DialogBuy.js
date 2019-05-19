import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { buy } from "../actions/actions";

class DialogBuy extends React.Component {

    state = {
      open: false,
      input: '',
    };

  handleBuy = () => {
    buy();
    this.setState({ open: false });
  };

  addTodo = (e) => {
    this.props.addTodo(this.state.input);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = (e) => {
      e.preventDefault();
      this.setState({
          input: e.target.value
      })
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Buy
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Buy currency</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter, how many units of this currency you want to buy.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="How much"
              type="number"
              fullWidth
              onChange={ this.handleInputChange }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">Cancel</Button>
            <Button onClick={this.handleBuy} color="primary">Buy</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return store;
}

const mapDispatchToProps = dispatch => {
  return {
    buy: (input) => dispatch(buy(input)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogBuy);
