import {Item, RARITIES, Rarity} from "../../models";
import React from "react";
import "./index.scss";

interface ItemsWrapperProps {
	items: Item[];
	handleMouseOver: (evt: React.MouseEvent<HTMLDivElement>, item: Item, rarity: Rarity) => void;
	handleMouseLeave: () => void;
}

function ItemsWrapper({items, handleMouseOver, handleMouseLeave}: ItemsWrapperProps) {
	return <div className="items-wrapper">
		<div className="row">
			{items.map((item: Item, itemKey) => {
				return RARITIES.map((rarity, rarityKey) => (
					<div className="col-2">
						<div className={`item item-rarity ${rarity}`} key={rarityKey}
								 onMouseEnter={(evt) => handleMouseOver(evt, item, rarity)}
								 onMouseLeave={handleMouseLeave}
						>
							<img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
						</div>
					</div>
				))
			})}

		</div>
	</div>
}

export default ItemsWrapper;
