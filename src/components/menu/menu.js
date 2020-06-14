import React from "react";
import { connect } from "react-redux";
import { switchAddTaskMode, userLoggedOut } from "../../actions";
import AddFilter from "../add-filter";
import "./menu.scss";

const Menu = ({ onAddModeSwitched, onUserLoggedOut }) => {
  return (
    <div className="menu">
      <button onClick={onUserLoggedOut}>Exit</button>
      <button onClick={onAddModeSwitched}>Add task</button>
      <AddFilter />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddModeSwitched: () => dispatch(switchAddTaskMode()),
    onUserLoggedOut: () => dispatch(userLoggedOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Menu);
