import React from "react";
import {Item as ItemModel} from "../../models";

interface ItemPreviewProps {
  item: ItemModel;
  setDetailsOpen?: (open: boolean) => void;
}

function ItemPreview({setDetailsOpen, item}: ItemPreviewProps) {
  return <div className={`item item-rarity ${item.rarity}`} onClick={() => setDetailsOpen && setDetailsOpen(true)}>
    <img src={item.getImageUrl()} alt={`${item.name}-${item.rarity}`}/>
    <p className="level">{item.level}</p>
  </div>
}

export default ItemPreview;
