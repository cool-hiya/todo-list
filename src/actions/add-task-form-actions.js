const taskNameAdded = name => {
  return {
    type: "TASK_NAME_ADDED",
    payload: name
  };
};

const dateButtonSelected = button => {
  return {
    type: "DATE_BUTTON_SELECTED",
    payload: button
  };
};

const dateChanged = date => {
  return {
    type: "DATE_CHANGED",
    payload: date
  };
};

export { taskNameAdded, dateButtonSelected, dateChanged };
