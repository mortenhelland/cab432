import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
 


const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
Geocode.setApiKey("AIzaSyCSaixeAEdTY4Ewi1wR_GjzoFBYhWn8LlU");


class Maps extends Component {


  
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyCSaixeAEdTY4Ewi1wR_GjzoFBYhWn8LlU'}}
          defaultCenter={{
            lat: 60.241755,
            lng: 5.337844
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={60.241755}
            lng={5.337844}
            text="My Home place"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Maps;