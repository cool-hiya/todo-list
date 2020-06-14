import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { TasksServiceProvider } from "./components/tasks-service-context";

import TasksService from "./services/tasks-service";
import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";
import store from "./store";

const tasksService = new TasksService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TasksServiceProvider value={tasksService}>
        <Router>
          <App />
        </Router>
      </TasksServiceProvider>
    </ErrorBoundry>
  </Provider>,

  document.getElementById("root")
);
