import React from "react";
import AddTaskForm from "../add-task-form";
import { connect } from "react-redux";
import { switchAddTaskMode } from "../../actions";
import "./add-task-modal.scss";

const AddTaskModal = ({ addMode, onAddModeSwitched }) => {
  const className = addMode ? "" : " _hidden";

  return (
    <div className={"add-task-modal" + className}>
      <button onClick={onAddModeSwitched}>Back</button>
      <h1>Add task</h1>
      <AddTaskForm />
    </div>
  );
};

const mapStateToProps = ({ taskList: { addMode } }) => {
  return { addMode };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddModeSwitched: () => dispatch(switchAddTaskMode())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskModal);
