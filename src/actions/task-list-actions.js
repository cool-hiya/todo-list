const tasksLoaded = newTasks => {
  return {
    type: "FETCH_TASKS_SUCCESS",
    payload: newTasks
  };
};

const tasksRequested = () => {
  return {
    type: "FETCH_TASKS_REQUEST"
  };
};

const tasksError = error => {
  return {
    type: "FETCH_TASKS_FAILURE",
    payload: error
  };
};

const taskToggleDone = id => {
  return {
    type: "TASK_TOGGLE_DONE",
    payload: id
  };
};

const taskDeleted = id => {
  return {
    type: "TASK_DELETED",
    payload: id
  };
};

const taskAdded = task => {
  return {
    type: "TASK_ADDED",
    payload: task
  };
};

const filterChanged = filter => {
  return {
    type: "FILTER_CHANGED",
    payload: filter
  };
};

const optionalFilterAdded = data => {
  return {
    type: "OPTIONAL_FILTER_ADDED",
    payload: data
  };
};

const switchAddTaskMode = () => {
  return {
    type: "SWITCH_ADD_TASK_MODE"
  };
};

const fetchTasks = (tasksService, dispatch) => () => {
  dispatch(tasksRequested());
  tasksService
    .getTasks()
    .then(data => {
      dispatch(tasksLoaded(data));
    })
    .catch(error => dispatch(tasksError(error)));
};

export {
  fetchTasks,
  taskToggleDone,
  taskDeleted,
  taskAdded,
  switchAddTaskMode,
  filterChanged,
  optionalFilterAdded
};
