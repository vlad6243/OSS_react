import React, { Component } from 'react';

function sendEmail(name, mail, message) {
  const params = { name, mail, message };
  let alertText = 'Email sending request in process.\nEmail params:\n';
  alertText += Object.keys(params)
    .map((i) => `${i}: ${params[i]}`)
    .join('\n');
  alert(alertText);
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.mailRef = React.createRef();
    this.messageRef = React.createRef();
  }

  handleSubmit = (e) => {
    const name = this.nameRef.current.value;
    const mail = this.mailRef.current.value;
    const message = this.messageRef.current.value;
    e.preventDefault();
    sendEmail(name,mail,message)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.mailRef} />
        <input type="text" ref={this.messageRef} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
    </div>
  );
};

export default Task;
