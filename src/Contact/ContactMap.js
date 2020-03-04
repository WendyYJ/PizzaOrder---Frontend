import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import './Contact.scss';

const mapStyles = {
  width: '50%',
  height: '50%',
  margin: '2vw'
};

export class ContactMap extends Component {
    state = {
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedPlace: {}         
    };

    onMarkerClick = (props, marker, e) =>
      this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
     if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
    <div class="contact-map">
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: -27.469770,
         lng: 153.025131
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Brisbane City Council'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

       </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB8Z-VcYZ2LEtVuD6DnLboC3EEPMWjGe8k'
})(ContactMap);