import { Filter } from "../models";
import { addDays, isSameDay } from "date-fns";

const getElement = (data, id) => {
  const el = data.find(el => id === el.id);
  const index = data.findIndex(el => id === el.id);

  return {
    el: { ...el },
    index
  };
};

const updateElements = (data, el, index) => {
  /** Add el */
  if (index === undefined) {
    return [...data, el];
  }

  /** Replace el */
  if (el) {
    return [...data.slice(0, index), el, ...data.slice(index + 1)];
  }

  /** Delete el */
  return [...data.slice(0, index), ...data.slice(index + 1)];
};

const getFilter = (state, id) => {
  const { el: filter, index } = getElement(state.filters, id);
  return {
    filter,
    index
  };
};

const getTask = (state, id) => {
  const { el: task, index } = getElement(state.tasks, id);
  return {
    task,
    index
  };
};

const updateTasks = (state, task, index) => {
  const { tasks } = state;

  return updateElements(tasks, task, index);
};

const updateFilters = (state, filter, index) => {
  const { filters } = state;

  return updateElements(filters, filter, index);
};

const filterTasks = (tasks, filter) => {
  return tasks.filter(task => isSameDay(task.date, filter.value));
};

const filters = [
  new Filter(1, null, null),
  new Filter(2, "Today", new Date()),
  new Filter(3, "Tomorrow", addDays(new Date(), 1))
];

const updateTaskList = (state, action) => {
  if (state === undefined) {
    return {
      tasks: [],
      filteredTasks: [],
      filters: filters,
      activeFilter: filters[1],
      loading: true,
      error: null,
      addMode: false
    };
  }

  state = state.taskList;

  switch (action.type) {
    case "FETCH_TASKS_REQUEST":
      return {
        ...state,
        tasks: [],
        loading: true,
        error: null
      };

    case "FETCH_TASKS_SUCCESS":
      return {
        ...state,
        tasks: action.payload,
        filteredTasks: filterTasks(action.payload, state.activeFilter),
        loading: false,
        error: null
      };

    case "FETCH_TASKS_FAILURE":
      return {
        ...state,
        tasks: [],
        loading: false,
        error: action.payload
      };

    case "TASK_TOGGLE_DONE":
      const { task, index } = getTask(state, action.payload);
      task.done = !task.done;
      const updatedTasks = updateTasks(state, task, index);
      return {
        ...state,
        tasks: updatedTasks,
        filteredTasks: filterTasks(updatedTasks, state.activeFilter)
      };

    case "TASK_DELETED":
      const { index: deletedIndex } = getTask(state, action.payload);
      const deletedtasks = updateTasks(state, null, deletedIndex);
      return {
        ...state,
        tasks: deletedtasks,
        filteredTasks: filterTasks(deletedtasks, state.activeFilter)
      };

    case "TASK_ADDED":
      const addedTasks = updateTasks(state, action.payload);
      return {
        ...state,
        tasks: addedTasks,
        filteredTasks: filterTasks(addedTasks, state.activeFilter)
      };

    case "SWITCH_ADD_TASK_MODE":
      return {
        ...state,
        addMode: !state.addMode
      };

    case "FILTER_CHANGED":
      return {
        ...state,
        activeFilter: action.payload,
        filteredTasks: filterTasks(state.tasks, action.payload)
      };

    case "OPTIONAL_FILTER_ADDED":
      const { name, value } = action.payload;
      const { filter, index: filterIndex } = getFilter(state, 1);
      filter.name = name;
      filter.value = value;

      return {
        ...state,
        filters: updateFilters(state, filter, filterIndex),
        activeFilter: filter,
        filteredTasks: filterTasks(state.tasks, filter)
      };

    default:
      return state;
  }
};

export default updateTaskList;
