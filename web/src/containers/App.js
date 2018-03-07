import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import map from "lodash/map";

import * as appActions from "../actions/app";
import Submit from "../components/submit";
import Task from "../components/task";
import "../css/app.css";

class App extends Component {
  componentDidMount() {
    this.props.appActions.fetchTasks();
  }

  handleTaskAdd(e) {
    if (e.charCode === 13) {
      this.props.appActions.addTask({
        id: Object.keys(this.props.app.tasks || {}).length,
        description: e.target.value
      });

      e.target.value = "";
    }
  }

  handleTaskDelete(key) {
    this.props.appActions.removeTask(key);
  }

  render() {
    let { tasks, isFetching } = this.props.app;

    let taskViews =
      map(tasks, task => {
        return (
          <Task
            task={task}
            key={task.id}
            onClick={this.handleTaskDelete.bind(this, task.id)}
          />
        );
      }) || [];

    return (
      <React.Fragment>
        <Submit onSubmit={this.handleTaskAdd.bind(this)} />
        <ul>{isFetching ? <p>LOADING...</p> : taskViews}</ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { app: state.app };
};

const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
