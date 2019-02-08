import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import FriendListView from "./views/FriendListView";

class App extends Component {
  render() {
    return (
      <>
        <Route path="/friends" component={FriendListView} />
      </>
    );
  }
}

export default App;
