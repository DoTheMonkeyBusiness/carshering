import React, {PureComponent} from 'react';
import Style from './newAdvertisementContent.sass';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
// import update from 'react-addons-update';



class NewAdvertisementContent extends PureComponent {

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
          isMarkerShown: false,
          calendar:
            {
              start: '',
              end: '',
            },
          pricePerDay: '',
          advertisementText: '',
          carLocation:
            {
              lat: '',
              lng: '',
            },
          carPhotos: [
            {
              img: '',
              title: 'hi',
              id: '0',
            },
            {
              img: '',
              title: 'Image',
              id: '1',
            },
            {
              img: '',
              title: 'Image',
              id: '2',
            },
            {
              img: '',
              title: 'Image',
              id: '3',
            },
            {
              img: '',
              title: 'Image',
              id: '4',
            },
            {
              img: '',
              title: 'Image',
              id: '5',
            },
            {
              img: '',
              title: 'Image',
              id: '6',
            },
            {
              img: '',
              title: 'Image',
              id: '7',
            },
          ],

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
        this.setState({
          imagePreviewUrl: reader.result
        });
        this.setPhoto();
        console.log('look at me now',this.state.carPhotos);
        // do whatever you want with the file content
      };
      reader.readAsDataURL(file);
    })

  };
  setPhoto = () => {
    for (let i =0; i<8;i++) {
      if(this.state.carPhotos[i].img === '')
      {
        this.state.carPhotos[i].img = this.state.imagePreviewUrl;
        this.forceUpdate();
        break
      }
    }
    console.log('look at me now',this.state.carPhotos);

  };
  handleSetMark = (event) =>  {
    this.state.carLocation.lat = event.latLng.lat();
    this.state.carLocation.lng = event.latLng.lng();
    this.forceUpdate();
    this.showMark();
  };
  showMark = () => {
    this.setState({isMarkerShown: false});
    this.setState({isMarkerShown: true})
  };

  handleCalendar = event => {

    // this.setState({
    //   calendar: update(this.state.calendar, {start: {$set: event[0]}})
    //
    // });
    // this.setState({
    //   calendar: update(this.state.calendar, {end: {$set: event[1]}})
    //
    // });

    this.state.calendar.start = event[0];
    this.state.calendar.end = event[1];
    this.forceUpdate();
  };

    render() {
        return (
            <div className={Style.newAdvertisementContent_container}>
              <Grid container={true}>
                <Grid container item xs={12} justify="center">
              <h2>New Advertisement</h2>
                </Grid>
                <Grid container={true} item xs={12} justify="center">
                <CarPhotos handleFiles={this.handleFiles} imagePreviewUrl={this.state.imagePreviewUrl} carPhotos={this.state.carPhotos}/>
                </Grid>

                <div className={Style.newAdvertisementContent_border}>
                <Grid container={true} item xs={12}>
                  <Grid container item xs={12} justify="center">
                    <h2>Required to fill</h2>
                  </Grid>
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
                      <div><IceElectric handleChange={this.handleChange} iceElectric={this.state.iceElectric}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><FuelType handleChange={this.handleChange} fuelType={this.state.fuelType}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><PricePerDay handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><AdvertisementText handleChange={this.handleChange}/></div>
                    </Grid>

                    <Grid container item xs={12} justify="center">
                      <div><AvailabilityCalendar handleCalendar={this.handleCalendar}/></div>
                    </Grid>
                </Grid>

            </div>
                <Grid container={true} item xs={6}>

                </Grid>

                <Grid container={true} item xs={12}>
                  <Grid container item xs={12} justify="center">
                    <div><Mileage handleChange={this.handleChange}/></div>
                  </Grid>
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

                    <Grid container item xs={12} justify="center">
                      <div><FuelConsumption handleChange={this.handleChange}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><CarStatusData handleChange={this.handleChange}/></div>
                    </Grid>

                    <Grid container item xs={12} justify="center">
                      <div><OptionalAccessories handleAccessoriesChange={this.handleAccessoriesChange}
                                                airConditioning={this.state.airConditioning}
                                                babyChair={this.state.babyChair}
                                                bikeCarrier={this.state.bikeCarrier}/></div>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <div><InsuranceInformation handleChange={this.handleChange}/></div>
                    </Grid>

                    <Grid container item xs={12} justify="center">
                      <div><CarLocation carLocation={this.state.carLocation} setMark={this.handleSetMark} isMarkerShown={this.state.isMarkerShown}/></div>
                    </Grid>




                </Grid>

                <Grid container item xs={12} justify="center">
                  <div><Button variant="contained" color="primary" style={{margin: 30}}>Submit</Button></div>
                </Grid>
              </Grid>
            </div>
        );
    }
}

export default NewAdvertisementContent
