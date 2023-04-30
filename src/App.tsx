import React, {useEffect, useState} from "react";
import "./App.scss";
import data from "./data.json";
import {Item} from "./models";
import ItemsWrapper from "./components/items-wrapper";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const newItems: Item[] = [];
    Object.keys(data).forEach((itemType: string) => {
      const itemsForType = (data as any)[itemType];
      Object.keys(itemsForType).forEach((itemName: string) => {
        const itemValue = (itemsForType as any)[itemName];
        newItems.push(new Item(itemType, itemName, itemValue));
      })
    })
    setItems(newItems);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <ItemsWrapper items={items}/>
      </div>
    </div>
  );
}

export default App;
