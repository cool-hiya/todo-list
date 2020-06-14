import React from "react";
import { TasksServiceConsumer } from "../tasks-service-context";

const withTasksService = () => Wrapped => {
  return props => {
    return (
      <TasksServiceConsumer>
        {tasksService => {
          return <Wrapped {...props} tasksService={tasksService} />;
        }}
      </TasksServiceConsumer>
    );
  };
};

export default withTasksService;
