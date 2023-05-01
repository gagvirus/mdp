import {Item as ItemModel} from "../../models";
import React, {useState} from "react";
import "./index.scss";
import ItemPreview from "../item-preview/item-preview";
import ItemDetails from "../item-details";

interface ItemProps {
  item: ItemModel;
}

function Item({item}: ItemProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return <>
    <ItemPreview item={item} setDetailsOpen={setDetailsOpen}/>
    {detailsOpen && <ItemDetails
      item={item}
      handleClose={() => setDetailsOpen(false)}
    />}
  </>
}

export default Item;
