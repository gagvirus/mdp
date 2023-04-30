import {Item as ItemModel, RARITIES} from "../../models";
import React from "react";
import "./index.scss";
import Item from "../item";

interface ItemsWrapperProps {
	items: ItemModel[];
}

function ItemsWrapper({items}: ItemsWrapperProps) {
	return <div className="items-wrapper">
		<div className="row">
			{items.map((item: ItemModel, itemKey) => {
				return RARITIES.map((rarity, rarityKey) => (
					<div className="col-2" key={`${itemKey}-${rarityKey}`}>
						<Item item={item} rarity={rarity} level={1}/>
					</div>
				))
			})}

		</div>
	</div>
}

export default ItemsWrapper;
