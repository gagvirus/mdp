import React from "react";
import "./App.scss";
import ItemsWrapper from "./components/items-wrapper";
import Inventory from "./components/inventory";
import {ItemsContextProvider} from "./context/items-context";
import {EquipmentContextProvider} from "./context/equipment-context";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ItemsContextProvider>
          <EquipmentContextProvider>
            <Inventory/>

            <ItemsWrapper/>
          </EquipmentContextProvider>

        </ItemsContextProvider>
      </div>
    </div>
  );
}

export default App;
