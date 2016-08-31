import React from 'react';
import userRepository from '../core/repositories/userrepository';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class UserList extends React.Component {

   constructor(props) {
     super(props);
     this.userList = userRepository.listAllUsers();
   }

   render() {

     let userList = [];

      for (let i = 0; i < this.userList.length; i++) {
        userList.push(
            <ListGroupItem>
              {this.userList[i].fullname}
            </ListGroupItem>
        );
      }

      console.log(userList);

      return (
        <div id="userlist">
        <p> List of users </p>
          <ListGroup>
            {userList}
          </ListGroup>
        </div>
      );
  }
}


export default UserList;
