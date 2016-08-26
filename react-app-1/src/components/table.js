import React from 'react';

class Table extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
        user: 'vkata',
        fullname: 'Vizi Kata',
        email: '0740889090',
      }
  }

  render() {
    return (
      <div>
      <p id="header"> This is a simple table </p>
      <table id="table">
        <tr>
          <th>Username</th>
          <th>Full Name</th>
          <th>Email</th>
        </tr>

        <tr>
          <td>{this.state.user}</td>
          <td>{this.state.fullname}</td>
          <td>{this.state.email}</td>
        </tr>
     </table>
     </div>
    );
  }
}

export default Table;
