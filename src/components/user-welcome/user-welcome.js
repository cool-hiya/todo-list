import React from "react";
import { connect } from "react-redux";

const UserWelcome = ({ name }) => {
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
};

const mapStateToProps = ({ auth: { user } }) => {
  return { name: user.name };
};

export default connect(
  mapStateToProps,
  null
)(UserWelcome);
