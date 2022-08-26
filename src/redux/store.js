import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

function saveToLocalStorage({ cart }) {
  const serializedState = JSON.stringify(cart);
  localStorage.setItem("state", serializedState);
}
function loadFromLocalStorage() {
  const serializedState = localStorage.getItem("state");

  if (serializedState === null) return undefined;
  const cart = JSON.parse(serializedState);
  return { cart };
}
const preloadedStateCart = loadFromLocalStorage();

const store = configureStore({
  reducer: cartReducer,
  preloadedState: preloadedStateCart
});


store.subscribe(() => saveToLocalStorage(store.getState()));
export { store };
