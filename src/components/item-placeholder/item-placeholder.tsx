import React from "react";
import {EquipmentType} from "../../models";

interface ItemPlaceholderProps {
  type: EquipmentType;
}

function ItemPlaceholder({type}: ItemPlaceholderProps) {
  return <div className={`item placeholder`}>
    <img src={"/images/placeholder/" + type + '.png'} alt={`${type}-placeholder`}/>
  </div>
}

export default ItemPlaceholder;
