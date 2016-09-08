import React from 'react';
import userRepository from '../core/repositories/userrepository';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import ListPagination from './pagination'
import personValidator from '../core/model/personvalidator';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert} from 'react-bootstrap';

class UserList extends React.Component {

   constructor(props) {
     super(props);

     this.state = {
       userList: [],
       page: 1,
       find: ''
     };

     this.onClick = this.onClick.bind(this);
     this.getSelectedPart = this.getSelectedPart.bind(this);
     this.setPage = this.setPage.bind(this);
     this.searchUser = this.searchUser.bind(this);
   }

   /**
    * filtering by username - findByName method from the repo
    */
   searchUser(name) {
     if (name.target.value == "") {
       this.setState({
         find: name.target.value,
       });
       this.getSelectedPart(this.state.page);
     }
     else {
       this.setState({
         find: name.target.value
       });

       this.setState({
         userList: userRepository.findByName(name.target.value)
       });
     }
   }

   setPage(p) {
     this.setState({
       page: p
     });
     this.getSelectedPart(p);
   }

   /**
    * clicking on the Populate button -> filling the repo with random users
    * saving this list in state
    */
   onClick() {
      userRepository.populate();

      this.setState({
        userList: userRepository.listAllUsers()
      })
      this.getSelectedPart(1);
   }

   /**
    * this is a function for selecting the part of the whole list, which should
    * appear on the page with an index of "p"
    *
    * the result (a list) is then stored in the state
    */
   getSelectedPart(p) {

     this.setState({
       userList: userRepository.getDataForPageNr(p, 10)
     });

   }

   render() {
     let uList = [];

     /**
      *   we iterate through the list of the users and create a ListGroupItem
      *   element for each
      *   the rendered ListGroup will contain this list of elements
      */
      for (let i = 0; i < this.state.userList.length; i++) {
        uList.push(
            <ListGroupItem key={i}>
              {this.state.userList[i].fullname}
            </ListGroupItem>
        );
      }

      return (
        <div id="userlist">
        <p> List of users </p>
          <Button onClick={this.onClick}>Populate users</Button>
          <br/>
          <FormGroup
            controlId="find"
            validationState={personValidator.checkFullname(this.state.find)}
            >
            <ControlLabel>Find user: </ControlLabel>
            <FormControl
              type="text"
              value={this.state.find}
              placeholder="name"
              onChange={this.searchUser}
              />
            <FormControl.Feedback />
          </FormGroup>
          <br/>
          <ListGroup>
            {uList}
          </ListGroup>
          <ListPagination handle={this.setPage}/>
        </div>
      );
  }
}


export default UserList;
