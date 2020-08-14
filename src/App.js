import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksContainer from "./components/HooksContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <IceCreamContainer />
      </div>
      <div>
        <HooksContainer />
      </div>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
