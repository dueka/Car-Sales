import * as types from "./actionTypes";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

// const additionalPrice = 0;
// const additionalFeatures = [
//   { id: 1, name: "V-6 engine", price: 1500 },
//   { id: 2, name: "Racing detail package", price: 1500 },
//   { id: 3, name: "Premium sound system", price: 500 },
//   { id: 4, name: "Rear spoiler", price: 250 }
// ];

export function addReducer(state = initialState, action) {
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
        features: state.car.features.filter(
          feature => feature.id !== action.payload.id
        )
      };
    default:
      return state;
  }
}
