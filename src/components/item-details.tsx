import ItemPreview from "./item-preview/item-preview";
import Slider from "rc-slider";
import Modal from "./modal";
import React from "react";
import {Item as ItemModel} from "../models";
import {useEquipment} from "../context/equipment-context";
import {useItems} from "../context/items-context";

interface ItemDetailsProps {
  item: ItemModel;
  handleClose: () => void;
}

function ItemDetails({item, handleClose}: ItemDetailsProps) {
  const {equipItem, unequipItem, isItemEquipped, setItemLevel: setEquippedItemLevel} = useEquipment();
  const {setItemLevel} = useItems();
  const handleSave = () => {
    isItemEquipped(item) ? unequipItem(item) : equipItem(item);
    handleClose && handleClose();
  }
  const handleLevelChange = (value: number | number[]) => {
    if (isItemEquipped(item)) {
      setEquippedItemLevel(item, value as number);
    }
    setItemLevel(item, value as number);
  }
  return <Modal
    title={item.name}
    show={true}
    onClose={handleClose}
    showClose={true}
    showSave={true}
    saveLabel={isItemEquipped(item) ? "Unequip" : "Equip"}
    onSave={handleSave}
  >
    <div className="row">
      <div className="col-10">
        <div style={{width: 200, margin: "auto"}}>
          <ItemPreview item={item}/>
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
          onChange={handleLevelChange}
          marks={item.getMarksForRarity()}
        />
      </div>
    </div>
  </Modal>
}

export default ItemDetails;
