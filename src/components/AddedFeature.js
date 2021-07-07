import React from "react";
import { remove } from "../components/state/actionCreators";
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.remove(props.feature.id)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state) {
  return {
    reducer: state.reducer
  };
}

export default connect(mapStateToProps, { remove })(AddedFeature);
