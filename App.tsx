import React from "react";
import App from "./src/app";
import store from "./src/app/redux/store";
import { Provider } from "react-redux";

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
