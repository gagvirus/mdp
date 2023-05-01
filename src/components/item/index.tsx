import {Item as ItemModel} from "../../models";
import React, {useState} from "react";
import "./index.scss";
import ItemPreview from "../item-preview/item-preview";
import ItemDetails from "../item-details";
import {useItems} from "../../context/items-context";

interface ItemProps {
  item: ItemModel;
}

function Item({item}: ItemProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const {setItemLevel} = useItems();

  return <>
    <ItemPreview item={item} setDetailsOpen={setDetailsOpen}/>
    {detailsOpen && <ItemDetails
      item={item}
      handleLevelChange={(value) => setItemLevel(item.id, value as number)}
      handleClose={() => setDetailsOpen(false)}
    />}
  </>
}

export default Item;
