import React from 'react'

const START = {
  lat: 46.317399,
  lng: 24.745900
};

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: 6
    }
  }

  componentDidMount() {
    console.log("Start: " + START.lat);
    this.map = new google.maps.Map(this.refs.map, {
      center: START,
      zoom: 8
    });

    this.marker = new google.maps.Marker({
          position: START,
          map: this.map,
          title: 'I\'m here!'
        });
  }

  componentWillReceiveProps() {
    this.setState({
      lat: parseFloat(this.props.lat),
      lng: parseFloat(this.props.lng)
    });

    console.log("newstate: " + typeof(this.state.lat));
    this.map = new google.maps.Map(this.refs.map, {
      center: this.state,
      zoom: 6
    });

    this.marker = new google.maps.Marker({
          position: this.state,
          map: this.map,
          title: 'I\'m here!'
        });
    this.map.setCenter(this.marker.getPosition());
  }

  render() {
    const mapStyle = {
      height: 300,
      border: '1px solid black'
    };

    return (
      <div>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}

export default Map;
