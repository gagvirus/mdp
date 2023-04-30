import {Item, RARITIES, Rarity} from "../../models";
import React from "react";

interface ItemsWrapperProps {
	items: Item[];
	handleMouseOver: (evt: React.MouseEvent<HTMLDivElement>, item: Item, rarity: Rarity) => void;
	handleMouseLeave: () => void;
}

function ItemsWrapper({items, handleMouseOver, handleMouseLeave}: ItemsWrapperProps) {
	return <div className="items-wrapper">
		{items.map((item: Item, itemKey) => (
			<div className="item-wrapper" key={itemKey}>
				{RARITIES.map((rarity, rarityKey) => (
					<div className={`item item-rarity ${rarity}`} key={rarityKey}
							 onMouseEnter={(evt) => handleMouseOver(evt, item, rarity)}
							 onMouseLeave={handleMouseLeave}
					>
						<img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
					</div>
				))}
			</div>
		))}
	</div>
}

export default ItemsWrapper;
