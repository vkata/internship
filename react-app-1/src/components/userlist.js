import React from 'react';
import userRepository from '../core/repositories/userrepository';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import ListPagination from './pagination'
import personValidator from '../personvalidator';
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
      //  console.log(name.target.value);

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

   onClick() {
      userRepository.populate();

      this.setState({
        userList: userRepository.listAllUsers()
      })
      this.getSelectedPart(1);
   }

   getSelectedPart(p) {

     this.setState({
       userList: userRepository.getDataForPageNr(p, 10)
     });

   }

   render() {
     let uList = [];

      for (let i = 0; i < this.state.userList.length; i++) {
        uList.push(
            <ListGroupItem key={i}>
              {this.state.userList[i].fullname}
            </ListGroupItem>
        );
      }
      // console.log(uList);

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
