import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksContainer from "./components/HooksContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
    <UserContainer/>
      <div>
        <NewCakeContainer />
      </div>
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
