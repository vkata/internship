import React from 'react';
import wsRepository from '../core/repositories/wsrepository';

class WsList extends React.Component {

   constructor(props) {
     super(props);
     this.wsList = wsRepository.listAllStations();
   }

   render() {

     let wsList = [];

      for (let i = 0; i < this.wsList.length; i++) {
        wsList.push(
            <ListItem
              station = {this.wsList[i]}
            />
        );
      }

      console.log(wsList);

      return (
        <div id="wslist">
        <p> List of weather stations </p>
          <ul>
            {wsList}
          </ul>
        </div>
      );
  }
}

class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<li>{this.props.station.name}</li>);
  }
}


export default WsList;
