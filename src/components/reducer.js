// Actions:
const inc = {
  type: "INCREMENT",
};

const dec = {
  type: "DECREMENT",
};

// reducers:
function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else {
    return state;
  }
}

function createStore(reducer) {
  let state = 0;
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  return { getState, dispatch };
}

const store = createStore(reducer);
// test
store.dispatch(inc);
console.log(store.getState()); // test
store.dispatch(inc);
console.log(store.getState());
store.dispatch(dec);
console.log(store.getState());
