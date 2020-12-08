import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`enter valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAgree = this.handleChangeAgree.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email:"",
      agree:false
    }
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeAgree(event) {
    this.setState({ agree: !this.state.agree });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const agreeCheckbox = this.state.agree;

    if (!email) {
      alert(`enter valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="email" value={this.state.email} onChange={this.handleChangeEmail} />
          <input type="checkbox" value={this.state.agree} onChange={this.handleChangeAgree} />
          <input type="submit" value="Отправить" />
        </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      {/*<UncontrolledForm />*/}
      <ControlledForm />
    </div>
  );
};

export default Task;
