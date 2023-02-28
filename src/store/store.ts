import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { testTodos } from "../__fixtures__/test-todos";

const store = legacy_createStore(reducer);

testTodos.forEach((todo) => {
  store.dispatch({
    type: "ADD_TODO", 
    payload: todo
  });
});

export default store;
