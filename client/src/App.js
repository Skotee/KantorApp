import React, {Component, Fragment} from 'react';
import MenuBar from './components/MenuBar'
import WalletUser from './components/WalletUser'
import WalletCantor from './components/WalletCantor'
import './App.css';


export default class extends Component {
  render() {
    return <Fragment>
        <MenuBar/>
        <WalletCantor/>
        <WalletUser/>
      </Fragment>
  }
}

// function App() {
//   return (

//   );
// }

