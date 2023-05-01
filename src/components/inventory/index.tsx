import ItemPlaceholder from "../item-placeholder/item-placeholder";
import {Dict, EquipmentType, Item as ItemModel} from "../../models";
import Item from "../item";
import {useEquipment} from "../../context/equipment-context";

function ItemOrPlaceholder({item, type}: {item: ItemModel | null, type: EquipmentType}) {
  return item ? <Item item={item} />: <ItemPlaceholder type={type} />
}

function Inventory() {
  const {getItem} = useEquipment();

  const weapons: EquipmentType[] = ["main", "special", "ultimate", "launcher"];
  const armor: EquipmentType[] = ["helmet", "gloves", "armor", "boots"];
  const allEquipment = weapons.concat(armor);
  let totalMoneySpent = 0;
  let tokensSpent: Dict<number> = {};
  allEquipment.forEach((type) => {
    const equippedItem = getItem(type);
    if (equippedItem) {
      totalMoneySpent += equippedItem.getTotalMoneyCost();
      const ts = equippedItem.getTotalTokenCost();
      if (ts) {
        if (['main', 'special'].includes(type)) {
          tokensSpent[equippedItem.name] = ts;
        } else {
          tokensSpent[equippedItem.type] = ts;
        }
      }
    }
  })
  return <div className="row">
    <div className="col-2">
      {weapons.map((type) => <ItemOrPlaceholder item={getItem(type)} type={type} key={type} />)}
    </div>
    <div className="col-8">
      <ul>
        {totalMoneySpent && <li>Total Money Spent: {totalMoneySpent}</li>}
        {Object.keys(tokensSpent).map((key: string) => <li key={key}>{key} Tokens Spent: {tokensSpent[key]}</li>)}
      </ul>
    </div>
    <div className="col-2">
      {armor.map((type) => <ItemOrPlaceholder item={getItem(type)} type={type} key={type} />)}
    </div>
  </div>
}

export default Inventory;
