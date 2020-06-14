import React from "react";
import LoginForm from "../../login-form/login-form";
import { connect } from "react-redux";
import { userLoggedIn } from "../../../actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const LoginPage = ({ history, onUserLoggedIn }) => {
  const onLogin = user => {
    onUserLoggedIn(user);
    history.push("/");
  };

  return (
    <div>
      <h1>Log in</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onUserLoggedIn: user => dispatch(userLoggedIn(user))
  };
};

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(LoginPage);
