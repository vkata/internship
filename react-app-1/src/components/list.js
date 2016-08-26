import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [
        { name: "cat" }
      ],
      newAnimal: ''
    };

  this.addAnimal = this.addAnimal.bind(this);
  this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    //console.log(e.target.value);
    if (e.target.value != '') {
      this.setState({
        newAnimal: e.target.value
      });
    }
  }

  addAnimal() {
    if (this.state.newAnimal.length > 0) {
        let animals = this.state.animals.concat({name: this.state.newAnimal});
        this.setState({
          animals: animals
        });
    }
  }

  render() {

    let animalList = [];

    for (let i = 0; i < this.state.animals.length; i++) {
      animalList.push(
          <ListItem
            animal = {this.state.animals[i]}
          />
      );
    }

    return (
      <div id="list">
      <p id="header"> This is a list of animals --- you can add new ones </p>
        <ul>
          {animalList}
        </ul>
        <input id="animal" type="text" onChange={this.onChange}/>
        <button className='add-product' onClick={this.addAnimal}>Add animal</button>
      </div>
    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<li>{this.props.animal.name}</li>);
  }
}

export default List;
