import React, { createContext, useReducer } from "react";

export const Store = createContext();

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
const initialState = {
  cart: { loading: true },
  order: null,
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreProvider value={value}>{props.children}</StoreProvider>;
}
