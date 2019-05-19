import React, {Component, Fragment} from 'react';
import MenuBar from './components/MenuBar'
import WalletUser from './components/WalletUser'
import WalletCantor from './components/WalletCantor'
import './App.css';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return <Fragment>
        <MenuBar/>
          <Grid container spacing = {24}>
          <WalletCantor/>
          <WalletUser/>
        </Grid>
      </Fragment>
  }
}

export default App