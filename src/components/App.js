import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/todoList" exact component={TodoList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
