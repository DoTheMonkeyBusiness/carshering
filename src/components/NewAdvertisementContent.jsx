import React, {PureComponent} from 'react';
import Style from './newAdvertisementContent.sass';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CarMake from './NewAdvertisementComponents/CarMake';
import CarModel from './NewAdvertisementComponents/CarModel';
import YearOfIssue from './NewAdvertisementComponents/YearOfIssue';
import Mileage from './NewAdvertisementComponents/Mileage';
import NumberOfSeats from './NewAdvertisementComponents/NumberOfSeats';
import GearboxType from './NewAdvertisementComponents/GearboxType';
import BodyType from './NewAdvertisementComponents/BodyType';
import Drive from './NewAdvertisementComponents/Drive';
import FuelType from './NewAdvertisementComponents/FuelType';
import IceElectric from './NewAdvertisementComponents/IceElectric';
import CarNumber from './NewAdvertisementComponents/CarNumber';
import CarPhotos from './NewAdvertisementComponents/CarPhotos';


class NewAdvertisementContent extends PureComponent {

    constructor() {
        super();

    }


    render() {
        return (
            <div className={Style.newAdvertisementContent_container}>
              <Grid container={true}>
                <Grid container item xs={12} justify="center">
              <h2>New Advertisement</h2>
                </Grid>
                <Grid container={true} item xs={12} justify="center">
                <CarPhotos/>
                </Grid>

                <Grid container={true} item xs={12}>
                  <Grid container={true} item xs={6}>
                    <Grid container item xs={12} justify="center">
                      <div><CarMake/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><CarModel/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><CarNumber/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><YearOfIssue/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><Mileage/></div>
                    </Grid>
                  </Grid>


                  <Grid container={true} item xs={6}>
                    <Grid container item xs={12} justify="center">
                      <div><NumberOfSeats/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><GearboxType/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><BodyType/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><Drive/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><FuelType/></div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container item xs={12}>
                <br/>
                <hr/>
                  <hr style={{color: 'black'}}/>
                <br/>
              </Grid>


                <Grid container={true} item xs={12}>
                  <Grid container={true} item xs={12}>
                    <Grid container item xs={12} justify="center">
                      <div><IceElectric/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><YearOfIssue/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><Mileage/></div>
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>

            </div>
        );
    }
}

export default NewAdvertisementContent
