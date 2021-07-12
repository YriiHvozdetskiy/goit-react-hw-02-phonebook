import { Component } from 'react';

export class Input extends Component {
  state = {
    name: '',
    secondName: '',
  };

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  //   handleNameChange = e => {
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   };

  //   handleSecondNameChange = e => {
  //     this.setState({
  //       secondName: e.target.value,
  //     });
  //   };

  render() {
    return (
      <form>
        <label>
          Імя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Фамілія
          <input
            type="text"
            name="secondName"
            value={this.state.secondName}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
