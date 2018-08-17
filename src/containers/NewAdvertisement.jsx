import React, {PureComponent} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NewAdvertisementContent from '../components/NewAdvertisementContent'
import theme from '../theme/Theme';
import {MuiThemeProvider} from '@material-ui/core/styles';

class NewAdvertisement extends PureComponent {
    render() {
        return (
            <div>
              <MuiThemeProvider theme={theme}>
              <Navigation/>
              <NewAdvertisementContent/>
              <Footer/>
              </MuiThemeProvider>
            </div>
        );
    }
}

export default NewAdvertisement
