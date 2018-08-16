import React, {PureComponent} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NewAdvertisementContent from '../components/NewAdvertisementContent'

class NewAdvertisement extends PureComponent {
    render() {
        return (
            <div>
              <Navigation/>
              <NewAdvertisementContent/>
              <Footer/>
            </div>
        );
    }
}

export default NewAdvertisement
