import React from "react";
import { connect } from "react-redux";
import { add, remove } from "../components/state/actionCreators";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.add(props.feature.id)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

function mapStateToProps(state) {
  return {
    reducer: state.reducer
  };
}

export default connect(mapStateToProps, { add, remove })(AdditionalFeature);
