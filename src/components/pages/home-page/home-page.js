import React, { useEffect } from "react";
import TaskList from "../../task-list";
import Menu from "../../menu";
import AddTaskModal from "../../add-task-modal";
import Filters from "../../filters";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import UserWelcome from "../../user-welcome";

const HomePage = ({ history, isUserLoggedIn }) => {
  useEffect(() => {
    if (!isUserLoggedIn) {
      history.push("/login");
    }
  }, [history, isUserLoggedIn]);

  return (
    <div>
      <UserWelcome />
      <Filters />
      <TaskList />
      <Menu />
      <AddTaskModal />
    </div>
  );
};

const mapStateToProps = ({ auth: { isUserLoggedIn } }) => {
  return { isUserLoggedIn };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  )
)(HomePage);
