import React from "react";
import { connect } from "react-redux";

import { FriendList, CreateFriendForm } from "../components";
// import actions

class FriendListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>FETCHING DATA...</p>;
    }
    return (
      <div>
        <FriendList friends={this.props.friends} />
        <CreateFriendForm />
      </div>
    );
  }
}

const mstp = ({ friendsReducer: state }) => {
  return {
    friends: []
  };
};

export default connect(
  mstp,
  {}
)(FriendListView);
