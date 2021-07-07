import * as types from "./actionTypes";

export function add(item) {
  return {
    types: types.ADD,
    payload: item
  };
}

export function remove(item) {
  return {
    types: types.REMOVE,
    payload: item
  };
}
