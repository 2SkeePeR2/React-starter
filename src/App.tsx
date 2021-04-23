import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <p>Hello world</p>
      </React.Fragment>
    </Provider>
  );
}

export default App;
