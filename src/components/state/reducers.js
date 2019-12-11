import * as types from "./actionTypes";

const initialState = [];
export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.concat(action.payload)
        }
      };
    case types.REMOVE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
}
