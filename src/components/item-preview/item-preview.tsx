import React from "react";
import {Item as ItemModel, Rarity} from "../../models";

interface ItemPreviewProps {
  item: ItemModel;
  rarity: Rarity;
  setDetailsOpen?: (open: boolean) => void;
  level: number;
}

function ItemPreview({level, rarity, setDetailsOpen, item}: ItemPreviewProps) {
  return <div className={`item item-rarity ${rarity}`} onClick={() => setDetailsOpen && setDetailsOpen(true)}>
    <img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
    <p className="level">{level}</p>
  </div>
}

export default ItemPreview;
