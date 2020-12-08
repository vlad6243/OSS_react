import React from 'react';

const Layout = ({ children }) => <div>{children}</div>;

function ResetPasswordForm() {
  const onSubmit = (e) => e.preventDefault();
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="password">Enter your password</label>
      <input type="text" id="password" />
      <button type="button">Submit</button>
    </form>
  );
}

function ResetPassword({ hasPassword, name, ...formProps }) {
  return (
    <Layout>
      {/*uncomment and fix the code below*/}
      {/*hasPassword ? (
        <h3>Reset your password</h3>
        <p>
          To finish resetting your password, enter your new password
          here and hit the "Reset" button.
        </p>
      ) : (
        <h3>Hi {name}!</h3>
        <p>Thanks for joining!</p>
        <p>
          Just one more step - please pick a password for your account:
        </p>
      )*/}
      <ResetPasswordForm {...formProps} />
    </Layout>
  );
}

const Task = () => {
  return (
    <div>
      <ResetPassword hasPassword={true} />
    </div>
  );
};

export default Task;
