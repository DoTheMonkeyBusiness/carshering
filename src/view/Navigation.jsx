import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import label from '../images/labe.png';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import SimpleMenu from './Menu';
import Style from './navigation.sass';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2d2d2d',
      main: '#101010',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FFE032',
      main: '#FFD123',
      dark: '#FDC315',
      contrastText: '#000',
    },
  },
});



const Navigation = () => (
  <div>
    <MuiThemeProvider theme={theme}>
    <AppBar position="static"  color="primary">
      <Toolbar>
        <Grid item xs={3}>
        <img src={label}/>
      </Grid>
        <Hidden only={['xs', 'sm']}>
        <Grid item xs={3}>
    <Button variant="contained" color="secondary" component={Link} to="/">Home</Button>
        </Grid>

          <Grid item xs={3}>
    <Button variant="contained" color="secondary" component={Link} to="/about">About</Button>
          </Grid>
            <Grid item xs={3}>
    <Button variant="contained" color="secondary" component={Link} to="/sample">Sample</Button>
            </Grid>
      </Hidden>
        <Hidden mdUp>
          <Grid container justify="flex-end">
              <SimpleMenu/>
          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>

    </MuiThemeProvider>
  </div>
);

export default withWidth()(Navigation);
