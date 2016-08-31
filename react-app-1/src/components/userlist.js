import React from 'react';
import userRepository from '../core/repositories/userrepository';

class UserList extends React.Component {

   constructor(props) {
     super(props);
     this.userList = userRepository.listAllUsers();
   }

   render() {

     let userList = [];

      for (let i = 0; i < this.userList.length; i++) {
        userList.push(
            <ListItem
              user = {this.userList[i]}
            />
        );
      }

      console.log(userList);

      return (
        <div id="userlist">
        <p> List of users </p>
          <ul>
            {userList}
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
    return (<li>{this.props.user.username}</li>);
  }
}


export default UserList;
