import React from 'react';

class FIO extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', patronymic: '', surname: '' };

    /* change code below this line */

    /* change code above this line */
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, patronymic, surname } = this.state;
    const message = `
    name: ${name}
    patronymic: ${patronymic}
    surname: ${surname}
    `;
    alert(message);
  };

  onNameChange(e) {
    const value = e.target.value;
    this.setState({ name: value });
  }

  // your code is here
  onPatronymicChange = (e) => {
    const value = e.target.value;
    this.setState({ patronymic: value });
  }

  onSurnameChange(e) {
    const value = e.target.value;
    this.setState({ surname: value });
  }

  render() {
    const {
      state: { name, patronymic, surname },
      onNameChange,
      onPatronymicChange,
      onSurnameChange,
    } = this;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          name:&nbsp;
          <input type="text" value={name} onChange={this.onNameChange.bind(this)} />
        </label>
        <br />
        <label>
          patronymic:&nbsp;
          <input type="text" value={patronymic} onChange={this.onPatronymicChange} />
        </label>
        <br />
        <label>
          surname:&nbsp;
          <input
            type="text"
            value={surname}
            onChange={e => this.onSurnameChange(e)}
          />
        </label>
        <br />
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

const Task = () => {
  return (
    <div className="task">
      <FIO />
    </div>
  );
};

export default Task;
