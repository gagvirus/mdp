import {useState} from "react";

function Inventory() {
  const initialEquipment = {
    main: null,
    special: null,
    ultimate: null,
    launchers: null,
    armor: null,
    boots: null,
    gloves: null,
    helmet: null,
  }
  const [equipment, setEquipment] = useState(initialEquipment);

  return <div className="row">
    <div className="col-2">
      weapons
    </div>
    <div className="col-8"></div>
    <div className="col-2">
      armor
    </div>
  </div>
}

export default Inventory;
