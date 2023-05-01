import ItemPlaceholder from "../item-placeholder/item-placeholder";

function Inventory() {
  return <div className="row">
    <div className="col-2">
      <ItemPlaceholder type="main"/>
      <ItemPlaceholder type="special"/>
      <ItemPlaceholder type="ultimate"/>
      <ItemPlaceholder type="launcher"/>
    </div>
    <div className="col-8"></div>
    <div className="col-2">
      <ItemPlaceholder type="helmet"/>
      <ItemPlaceholder type="gloves"/>
      <ItemPlaceholder type="armor"/>
      <ItemPlaceholder type="boots"/>
    </div>
  </div>
}

export default Inventory;
