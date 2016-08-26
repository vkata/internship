import React from 'react';

class RadioGroup extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" name="option" value="first"/>First<br/>
        <input type="radio" name="option" value="second"/>Second<br/>
        <input type="radio" name="option" value="third"/>Third<br/>
        <input type="radio" name="option" value="fourth"/>Fourth<br/>
      </div>
    );
  }
}

export default RadioGroup;
