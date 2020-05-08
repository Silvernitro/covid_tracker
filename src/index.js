import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Route } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Route>
      <App />
    </Route>
  </Provider>,
  document.getElementById("root")
);
