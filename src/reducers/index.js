import updateTaskList from "./task-list";
import updateAddTaskForm from "./add-task-form";
import updateAuth from "./auth";

const reducer = (state, action) => {
  return {
    taskList: updateTaskList(state, action),
    addTaskForm: updateAddTaskForm(state, action),
    auth: updateAuth(state, action)
  };
};

export default reducer;
