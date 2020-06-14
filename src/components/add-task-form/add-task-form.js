import React from "react";
import DateSelector from "../date-selector";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  taskNameAdded,
  taskAdded,
  dateButtonSelected,
  dateChanged
} from "../../actions";
import { withTasksService } from "../hoc";

const AddTaskForm = ({
  name,
  date,
  dateButtons,
  selectedDateButton,
  onTaskNameAdded,
  onDateButtonSelected,
  onDateSelected,
  onTaskAdded
}) => {
  const onNameChanged = e => {
    onTaskNameAdded(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (name) {
      onTaskAdded({ name, date });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={name}
        onChange={onNameChanged}
      />
      <DateSelector
        date={date}
        buttons={dateButtons}
        onButtonSelected={onDateButtonSelected}
        selectedButton={selectedDateButton}
        onDateSelected={onDateSelected}
      />
      <button type="submit">Add new task</button>
    </form>
  );
};

const mapStateToProps = ({
  addTaskForm: { name, date, dateButtons, selectedDateButton }
}) => {
  return { name, date, dateButtons, selectedDateButton };
};

const mapDispatchToProps = (dispatch, { tasksService }) => {
  return {
    onTaskAdded: data => dispatch(taskAdded(tasksService.createTask(data))),
    onTaskNameAdded: name => dispatch(taskNameAdded(name)),
    onDateButtonSelected: button => dispatch(dateButtonSelected(button)),
    onDateSelected: date => dispatch(dateChanged(date))
  };
};

export default compose(
  withTasksService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddTaskForm);
