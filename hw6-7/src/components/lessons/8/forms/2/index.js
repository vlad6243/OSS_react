import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    // change code below this line
    // change code above this line
    event.preventDefault();
    this.setState({
      submit: this.state.input
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* change code below this line */}
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          {/* change code above this line */}
          <button type="submit">Submit!</button>
        </form>
        {/* change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* change code above this line */}
      </div>
    );
  }
}

const Task = () => {
  return (
    <div>
      <ControlledForm />
    </div>
  );
};

export default Task;
