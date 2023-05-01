import {Item as ItemModel} from "../../models";
import React, {useState} from "react";
import "./index.scss";
import ItemPreview from "../item-preview/item-preview";
import ItemDetails from "../item-details";

interface ItemProps {
  item: ItemModel;
  handleLevelChange: (itemId: string, newLevel: number) => void;
}

function Item({item, handleLevelChange}: ItemProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleSliderChange = (value: number | number[]) => {
    handleLevelChange(item.id, value as number);
  }

  return <>
    <ItemPreview item={item} setDetailsOpen={setDetailsOpen}/>
    {detailsOpen && <ItemDetails
      item={item}
      handleLevelChange={handleSliderChange}
      handleClose={() => setDetailsOpen(false)}
    />}
  </>
}

export default Item;
