import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { combineReducers, createStore } from "redux";
import { addReducer } from "../src/components/state/reducers";
import { Provider } from "react-redux";

const monsterReducer = combineReducers({
  add: addReducer
});

const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </Provider>
  );
};

export default App;
