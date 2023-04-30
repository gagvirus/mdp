import {Item as ItemModel, Rarity} from "../../models";
import React from "react";
import "./index.scss";

interface ItemProps {
	item: ItemModel;
	rarity: Rarity;
	level: number;
}

function Item({item, rarity, level}: ItemProps) {
	return <div className={`item item-rarity ${rarity}`}>
		<img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
		<span className="level">{level}</span>
	</div>
}

export default Item;
