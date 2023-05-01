import {ItemsDict, RARITIES, Item as ItemModel} from "../../models";
import React, {useEffect} from "react";
import "./index.scss";
import Item from "../item";
import data from "../../data.json";
import {useItems} from "../../context/items-context";

function ItemsWrapper() {
  const {items, setItems} = useItems();
  useEffect(() => {
    const newItems: ItemsDict = {};
    Object.keys(data).forEach((itemType: string) => {
      const itemsForType = (data as any)[itemType];
      Object.keys(itemsForType).forEach((itemName: string) => {
        RARITIES.forEach((rarity) => {
          const itemValue = (itemsForType as any)[itemName];
          const item = new ItemModel(itemType, itemName, itemValue, rarity)
          newItems[item.id] = item;
        });
      })
    })
    setItems(newItems);
  }, [setItems]);

  function handleLevelChange(itemId: string, level: number) {
    // const item = {...items[itemId]};
    const item = items[itemId].clone();
    item.level = level;
    const newItems = {...items};
    newItems[itemId] = item;
    setItems(newItems)
  }

  return <div className="items-wrapper">
    <div className="row">
      {Object.values(items).map((item) =>
        <div className="col-2" key={item.id}>
          <Item item={item} handleLevelChange={handleLevelChange}/>
        </div>)}

    </div>
  </div>
}

export default ItemsWrapper;
