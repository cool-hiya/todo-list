import React from "react";
import "./task.scss";

const Task = ({ task, onTaskToggleDone, onTaskDeleted }) => {
  const { name, done } = task;
  const className = done ? "_done" : "";

  return (
    <p>
      <span className={className} onClick={onTaskToggleDone}>
        {name}
      </span>
      <button onClick={onTaskDeleted}>Delete</button>
    </p>
  );
};

export default Task;
