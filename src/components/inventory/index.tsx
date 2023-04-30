import {useState} from "react";
import ItemPlaceholder from "../item-placeholder/item-placeholder";

function Inventory() {
  const initialEquipment = {
    main: null,
    special: null,
    ultimate: null,
    launcher: null,
    armor: null,
    boots: null,
    gloves: null,
    helmet: null,
  }
  const [equipment, setEquipment] = useState(initialEquipment);

  return <div className="row">
    <div className="col-2">
      <ItemPlaceholder type="main" />
      <ItemPlaceholder type="special" />
      <ItemPlaceholder type="ultimate" />
      <ItemPlaceholder type="launcher" />
    </div>
    <div className="col-8"></div>
    <div className="col-2">
      <ItemPlaceholder type="helmet" />
      <ItemPlaceholder type="gloves" />
      <ItemPlaceholder type="armor" />
      <ItemPlaceholder type="boots" />
    </div>
  </div>
}

export default Inventory;
