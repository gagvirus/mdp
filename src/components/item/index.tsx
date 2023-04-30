import {Item as ItemModel} from "../../models";
import React, {useState} from "react";
import "./index.scss";
import Modal from "../modal";
import Slider from "rc-slider";
import ItemPreview from "../item-preview/item-preview";

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
    {detailsOpen &&
      <Modal title={item.name} show={true} onClose={() => setDetailsOpen(false)} showClose={true} showSave={false}>
        <div className="row">
          <div className="col-10">
            <div style={{width: 200, margin: "auto"}}>
              <ItemPreview item={item} />
            </div>
            <ul>
              <li>
                Attribute: {Math.ceil(item.getValueForLevel())}
              </li>
              <li>
                Upgrade Cost: {item.getMoneyCost()}
              </li>
              <li>
                Upgrade Tokens Cost: {item.getTokenCost()}
              </li>
              <li>
                Total Upgrade Cost: {item.getTotalMoneyCost()}
              </li>
              <li>
                Total Upgrade Tokens Cost: {item.getTotalTokenCost()}
              </li>
            </ul>
          </div>
          <div className="col-2">
            <Slider
              vertical
              style={{height: 400}}
              max={item.getMaxLevelForRarity()}
              min={1}
              startPoint={1}
              step={1}
              onChange={(n) => handleSliderChange(n)}
              marks={item.getMarksForRarity()}
            />
          </div>
        </div>
      </Modal>}
  </>
}

export default Item;
