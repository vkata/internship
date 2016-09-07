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
    }

    this.title = this.props.title;
  }

  componentWillMount() {
    this.setState({
      lat: START.lat,
      lng: START.lng
    });
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: START,
      zoom: 8
    });

    this.marker = new google.maps.Marker({
          position: START,
          map: this.map,
          title: this.title
        });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lat: parseFloat(nextProps.lat),
      lng: parseFloat(nextProps.lng)
    });

    this.map = new google.maps.Map(this.refs.map, {
      center: this.state,
      zoom: 6
    });

    this.marker = new google.maps.Marker({
          position: this.state,
          map: this.map,
          title: this.title
        });
    this.map.setCenter(this.marker.getPosition());
  }

  render() {

    // this.map = new google.maps.Map(this.refs.map, {
    //   center: this.state,
    //   zoom: 6
    // });

    // console.log("map: " + this.state.lat + "  " + this.state.lng);

    const mapStyle = {
      height: 400,
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
