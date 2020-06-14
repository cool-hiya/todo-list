import DateButton from "../models/date-button";
import { addDays } from "date-fns";

const dateButtons = [
  new DateButton(1, "Today", new Date()),
  new DateButton(2, "Tomorrow", addDays(new Date(), 1)),
  new DateButton(3, "Other day", new Date(), true)
];

const updateAddTaskForm = (state, action) => {
  if (state === undefined) {
    return {
      date: null,
      name: "",
      dateButtons: dateButtons,
      selectedDateButton: dateButtons[0]
    };
  }

  state = state.addTaskForm;

  switch (action.type) {
    case "TASK_NAME_ADDED":
      return {
        ...state,
        name: action.payload
      };
    case "DATE_BUTTON_SELECTED":
      return {
        ...state,
        selectedDateButton: action.payload
      };
    case "DATE_CHANGED":
      return {
        ...state,
        date: action.payload
      };
    case "TASK_ADDED":
      return {
        ...state,
        name: "",
        selectedDateButton: dateButtons[0]
      };
    case "SWITCH_ADD_TASK_MODE":
      return {
        ...state,
        name: "",
        selectedDateButton: dateButtons[0]
      };

    default:
      return state;
  }
};

export default updateAddTaskForm;
