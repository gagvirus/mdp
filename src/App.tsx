import React from "react";
import "./App.scss";
import ItemsWrapper from "./components/items-wrapper";
import Inventory from "./components/inventory";
import {ItemsContextProvider} from "./context/items-context";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ItemsContextProvider>
          <Inventory/>

          <ItemsWrapper/>
        </ItemsContextProvider>
      </div>
    </div>
  );
}

export default App;
