import {Item as ItemModel, Rarity} from "../../models";
import React, {useState} from "react";
import "./index.scss";
import Modal from "../modal";
import Slider from "rc-slider";

interface ItemProps {
  item: ItemModel;
  rarity: Rarity;
}

interface ItemPreviewProps extends ItemProps {
  setDetailsOpen?: (open: boolean) => void;
  level: number;
}

function ItemPreview({level, rarity, setDetailsOpen, item}: ItemPreviewProps) {
  return <div className={`item item-rarity ${rarity}`} onClick={() => setDetailsOpen && setDetailsOpen(true)}>
    <img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
    <p className="level">{level}</p>
  </div>
}

function Item({item, rarity}: ItemProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [level, setLevel] = useState(1);

  const handleSliderChange = (value: number | number[]) => {
    setLevel(value as number);
  }

  return <>
    <ItemPreview level={level} item={item} rarity={rarity} setDetailsOpen={setDetailsOpen}/>
    {detailsOpen &&
      <Modal title={item.name} show={true} onClose={() => setDetailsOpen(false)} showClose={true} showSave={false}>
        <div className="row">
          <div className="col-10">
            <div style={{width: 200, margin: "auto"}}>
              <ItemPreview level={level} item={item} rarity={rarity}/>
            </div>
            <ul>
              <li>
                Attribute: {Math.ceil(item.getValueForLevel(level, rarity))}
              </li>
              <li>
                Upgrade Cost: {item.getMoneyCost(level)}
              </li>
              <li>
                Upgrade Tokens Cost: {item.getTokenCost(level)}
              </li>
              <li>
                Total Upgrade Cost: {item.getTotalMoneyCost(level)}
              </li>
              <li>
                Total Upgrade Tokens Cost: {item.getTotalTokenCost(level)}
              </li>
            </ul>
          </div>
          <div className="col-2">
            <Slider
              vertical
              style={{height: 400}}
              max={item.getMaxLevelForRarity(rarity)}
              min={1}
              startPoint={1}
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
