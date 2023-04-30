import {Dict, Item as ItemModel} from "../../models";
import React from "react";
import "./index.scss";
import Item from "../item";

interface ItemsWrapperProps {
  items: Dict<ItemModel>;
  handleLevelChange: (itemId: string, newLevel: number) => void;
}

function ItemsWrapper({items, handleLevelChange}: ItemsWrapperProps) {
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
