import React, { Component } from "react";
import Task from "../task";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchTasks, taskToggleDone, taskDeleted } from "../../actions";
import { withTasksService } from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const TaskList = ({ tasks, onTaskToggleDone, onTaskDeleted }) => {
  const renderTasks = () => {
    return tasks.map(task => {
      const { id } = task;
      return (
        <li key={id}>
          <Task
            task={task}
            onTaskDeleted={() => onTaskDeleted(id)}
            onTaskToggleDone={() => onTaskToggleDone(id)}
          />
        </li>
      );
    });
  };

  return <ul>{renderTasks()}</ul>;
};

class TaskListContainer extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const {
      tasks,
      loading,
      error,
      onTaskToggleDone,
      onTaskDeleted
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    if (!tasks.length) {
      return <p>No tasks for this day</p>;
    }

    return (
      <TaskList
        tasks={tasks}
        onTaskToggleDone={onTaskToggleDone}
        onTaskDeleted={onTaskDeleted}
      />
    );
  }
}

const mapStateToProps = ({ taskList: { filteredTasks, loading, error } }) => {
  return { tasks: filteredTasks, loading, error };
};

const mapDispatchToProps = (dispatch, { tasksService }) => {
  return {
    fetchTasks: fetchTasks(tasksService, dispatch),
    onTaskToggleDone: id => dispatch(taskToggleDone(id)),
    onTaskDeleted: id => dispatch(taskDeleted(id))
  };
};

export default compose(
  withTasksService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TaskListContainer);
