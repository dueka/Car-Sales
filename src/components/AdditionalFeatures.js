import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import data from "./data/data";
const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>

      <ol type="1">
        {data.map(item => (
          <AdditionalFeature key={item.id} feature={item} />
        ))}
      </ol>
    </div>
  );
};

export default AdditionalFeatures;
