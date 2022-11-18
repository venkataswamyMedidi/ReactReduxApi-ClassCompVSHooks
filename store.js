import { createStore } from "redux";

const initialState = {
  addItem: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      addItem: [...state.addItem, ...action.payload]
    };
  }
  return state;
}

const store = createStore(rootReducer);
export default store;
