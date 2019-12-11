import React from "react";
import AddedFeature from "./AddedFeature";
import * as creators from "../components/state/actionCreators";
import { connect } from "react-redux";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.state.car.features.length ? (
        <ol type="1">
          {props.state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     remove: state.remove
//   };
// }
export default connect(state => state, creators)(AddedFeatures);
