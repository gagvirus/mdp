import {Item as ItemModel, Rarity} from "../../models";
import React, {useState} from "react";
import "./index.scss";
import Modal from "../modal";
import Slider from "rc-slider";

interface ItemProps {
  item: ItemModel;
  rarity: Rarity;
  level: number;
}

function Item({item, rarity, level}: ItemProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return <>
    <div className={`item item-rarity ${rarity}`} onClick={() => setDetailsOpen(true)}>
      <img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
      <p className="level">{level}</p>
    </div>
    {detailsOpen &&
      <Modal title={item.name} show={true} onClose={() => setDetailsOpen(false)} showClose={true} showSave={true}>
        <Slider max={80} min={1} step={1} />
      </Modal>}
  </>
}

export default Item;
