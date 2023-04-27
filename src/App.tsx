import React, {useEffect, useState} from "react";
import "./App.scss";
import data from "./data.json";
import {Item} from "./models";

function App() {
	const [items, setItems] = useState<Item[]>([]);


	useEffect(() => {
		const newItems: Item[] = [];
		Object.keys(data).forEach((itemType: string) => {
			const itemsForType = (data as any)[itemType];
			Object.keys(itemsForType).forEach((itemName: string) => {
				const itemValue = (itemsForType as any)[itemName];
				newItems.push(new Item(itemType, itemName, itemValue));
			})
		})
		setItems(newItems);
	}, []);

	const RARITIES = ["common", "uncommon", "rare", "epic"];

	return (
		<div className="App">
			<div className="items-wrapper">
				{items.map((item: Item, itemKey) => (
					<div className="item-wrapper" key={itemKey}>
						{RARITIES.map((rarity, rarityKey) => (
							<div className={`item item-rarity ${rarity}`} key={rarityKey}>
								<img src={item.getImageUrl()} alt={`${item.name}-${rarity}`} />
							</div>
						))}
					</div>
				))}
			</div>
			<div className="level-slider">
				<input type="text"/>
			</div>
		</div>
	);
}

export default App;
