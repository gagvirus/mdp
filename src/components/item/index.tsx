import {Item as ItemModel, Rarity} from "../../models";
import React, {useState} from "react";
import "./index.scss";
import Modal from "../modal";
import Slider from "rc-slider";

interface ItemProps {
  item: ItemModel;
  rarity: Rarity;
}

function Item({item, rarity}: ItemProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [level, setLevel] = useState(1);

  const handleSliderChange = (value: number | number[]) => {
    setLevel(value as number);
  }

  return <>
    <div className={`item item-rarity ${rarity}`} onClick={() => setDetailsOpen(true)}>
      <img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
      <p className="level">{level}</p>
    </div>
    {detailsOpen &&
      <Modal title={item.name} show={true} onClose={() => setDetailsOpen(false)} showClose={true} showSave={true}>
        <div className="row">
          <div className="col-10">

          </div>
          <div className="col-2">
            <Slider
              vertical
              style={{height: 400}}
              max={item.getMaxLevelForRarity(rarity)}
              min={1}
              step={1}
              onChange={(n) => handleSliderChange(n)}
              marks={item.getMarksForRarity(rarity)}
            />
          </div>
        </div>
      </Modal>}
  </>
}

export default Item;
