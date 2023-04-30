import React, {useEffect, useState} from "react";
import "./App.scss";
import data from "./data.json";
import {Dict, Item, RARITIES} from "./models";
import ItemsWrapper from "./components/items-wrapper";
import Inventory from "./components/inventory";

function App() {
  const [items, setItems] = useState<Dict<Item>>({});

  function handleLevelChange(itemId: string, level: number) {
    // const item = {...items[itemId]};
    const item = items[itemId].clone();
    item.level = level;
    const newItems = {...items};
    newItems[itemId] = item;
    setItems(newItems)
  }

  useEffect(() => {
    const newItems: Dict<Item> = {};
    Object.keys(data).forEach((itemType: string) => {
      const itemsForType = (data as any)[itemType];
      Object.keys(itemsForType).forEach((itemName: string) => {
        RARITIES.forEach((rarity) => {
          const itemValue = (itemsForType as any)[itemName];
          const item = new Item(itemType, itemName, itemValue, rarity)
          newItems[item.id] = item;
        });
      })
    })
    setItems(newItems);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Inventory />

        <ItemsWrapper items={items} handleLevelChange={handleLevelChange}/>
      </div>
    </div>
  );
}

export default App;
