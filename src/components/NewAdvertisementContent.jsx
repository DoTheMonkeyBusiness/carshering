import React, {Component} from 'react';
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
import FuelConsumption  from './NewAdvertisementComponents/FuelConsumption';
import CarStatusData  from './NewAdvertisementComponents/CarStatusData';
import OptionalAccessories  from './NewAdvertisementComponents/OptionalAccessories';
import AvailabilityCalendar  from './NewAdvertisementComponents/AvailabilityCalendar';
import PricePerDay  from './NewAdvertisementComponents/PricePerDay';
import AdvertisementText  from './NewAdvertisementComponents/AdvertisementText';
import InsuranceInformation  from './NewAdvertisementComponents/InsuranceInformation';
import CarLocation  from './NewAdvertisementComponents/CarLocation';



class NewAdvertisementContent extends Component {

    constructor() {
        super();

        this.state = {
          mileage: '',
          bodyType: '',
          carMake: '',
          carModel: '',
          carNumber: '',
          drive: '',
          fuelType: '',
          gearboxType: '',
          iceElectric: '',
          numberOfSeats: '',
          yearOfIssue: '',
          imagePreviewUrl: '',
          fuelConsumption: '',
          carStatusData: '',
          airConditioning: false,
          babyChair: false,
          bikeCarrier: false,
          calendarStart: '',
          calendarEnd: '',
          pricePerDay: '',
          advertisementText: '',

        };

    }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleAccessoriesChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleFiles = (acceptedFiles) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({imagePreviewUrl: reader.result});
        console.log(this.state.imagePreviewUrl);
        // do whatever you want with the file content
      };
      reader.readAsDataURL(file);
    });
  };

  handleCalendar = event => {

    this.setState({
      calendarStart: event[0],
      calendarEnd: event[1],

    })
  };

    render() {
        return (
            <div className={Style.newAdvertisementContent_container}>
              <Grid container={true}>
                <Grid container item xs={12} justify="center">
              <h2>New Advertisement</h2>
                </Grid>
                <Grid container={true} item xs={12} justify="center">
                <CarPhotos handleFiles={this.handleFiles} imagePreviewUrl={this.state.imagePreviewUrl}/>
                </Grid>

                <Grid container={true} item xs={12}>
                  <Grid container={true} item xs={6}>
                    <Grid container item xs={12} justify="center">
                      <div><CarMake handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><CarModel handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><CarNumber handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><YearOfIssue handleChange={this.handleChange} yearOfIssue={this.state.yearOfIssue}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><Mileage handleChange={this.handleChange}/></div>
                    </Grid>
                  </Grid>


                  <Grid container={true} item xs={6}>
                    <Grid container item xs={12} justify="center">
                      <div><NumberOfSeats handleChange={this.handleChange} numberOfSeats={this.state.numberOfSeats}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><GearboxType handleChange={this.handleChange} gearboxType={this.state.gearboxType}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><BodyType handleChange={this.handleChange} bodyType={this.state.bodyType}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><Drive handleChange={this.handleChange} drive={this.state.drive}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                    <div><IceElectric handleChange={this.handleChange} iceElectric={this.state.iceElectric}/></div>
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
                      <div><FuelType handleChange={this.handleChange} fuelType={this.state.fuelType}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><FuelConsumption handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><CarStatusData handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><AvailabilityCalendar handleCalendar={this.handleCalendar}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><OptionalAccessories handleAccessoriesChange={this.handleAccessoriesChange}
                                                airConditioning={this.state.airConditioning}
                                                babyChair={this.state.babyChair}
                                                bikeCarrier={this.state.bikeCarrier}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><PricePerDay handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><AdvertisementText handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><InsuranceInformation handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><InsuranceInformation handleChange={this.handleChange}/></div>
                    </Grid>

                    <Grid container item xs={12} justify="center">
                      <div><CarLocation/></div>
                    </Grid>


                  </Grid>

                </Grid>
              </Grid>

            </div>
        );
    }
}

export default NewAdvertisementContent
