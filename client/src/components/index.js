import React from 'react';
import MenuBar from './components/MenuBar'
import WalletUser from 'WalletUser'
import WalletCantor from 'WalletCantor'
import Grid from '@material-ui/core/Grid';
import './App.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

export default props =>
    <Grid container spacing = {24}>
       <Grid item xs={24}>
            <MenuBar styles = {styles}/>
        </Grid>
        <Grid item xs={12}>
            <WalletCantor styles = {styles}/>
        </Grid>
        <Grid item xs={12}>
            <WalletUser styles = {styles}/>
        </Grid>
    </Grid>