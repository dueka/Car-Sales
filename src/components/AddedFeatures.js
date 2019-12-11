import React from "react";
import AddedFeature from "./AddedFeature";
import data from "./data/data";

const AddedFeatures = () => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      <ol type="1">
        {data.map(item => (
          <AddedFeature key={item.id} feature={item} />
        ))}
      </ol>
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     remove: state.remove
//   };
// }
export default AddedFeatures;
