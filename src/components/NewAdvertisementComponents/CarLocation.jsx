import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{width: '500px', height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat:53.626266, lng: 23.848448 }}
    onClick={props.setMark}
  >
    {props.isMarkerShown && <Marker position={{ lat: parseFloat(props.carLocation.lat), lng: parseFloat(props.carLocation.lng) }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {

  // componentWillReceiveProps () {
  //   this.handleMarkerClick();
  //   this.delayedShowMarker()
  // }

  // delayedShowMarker = () => {
  //    this.setState({ isMarkerShown: true })
  // }

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false })
  // };

  render() {
    return (
      <MyMapComponent
        setMark={this.props.setMark}
        isMarkerShown={this.props.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        carLocation={this.props.carLocation}
      />
    )
  }
}

export default MyFancyComponent
