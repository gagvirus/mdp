import ItemPlaceholder from "../item-placeholder/item-placeholder";
import {EquipmentType, Item as ItemModel} from "../../models";
import Item from "../item";
import {useEquipment} from "../../context/equipment-context";

function ItemOrPlaceholder({item, type}: {item: ItemModel | null, type: EquipmentType}) {
  return item ? <Item item={item} />: <ItemPlaceholder type={type} />
}

function Inventory() {
  const weapons: EquipmentType[] = ["main", "special", "ultimate", "launcher"];
  const armor: EquipmentType[] = ["helmet", "gloves", "armor", "boots"];
  const {getItem} = useEquipment();
  return <div className="row">
    <div className="col-2">
      {weapons.map((type) => <ItemOrPlaceholder item={getItem(type)} type={type} />)}
    </div>
    <div className="col-8"></div>
    <div className="col-2">
      {armor.map((type) => <ItemOrPlaceholder item={getItem(type)} type={type} />)}
    </div>
  </div>
}

export default Inventory;
