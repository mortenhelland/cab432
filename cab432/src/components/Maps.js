import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 


const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: ''}}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Maps;