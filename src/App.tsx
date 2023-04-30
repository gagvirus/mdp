import React, {useEffect, useState} from "react";
import "./App.scss";
import data from "./data.json";
import {Item, Rarity} from "./models";
import ItemsWrapper from "./components/items-wrapper";

function App() {
	const [items, setItems] = useState<Item[]>([]);
	const [level, setLevel] = useState(1);
	const [clientPos, setClientPos] = useState<[number?, number?]>([])
	const [displayValue, setDisplayValue] = useState<number>();


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


	const handleMouseOver = (evt: React.MouseEvent<HTMLDivElement>, item: Item, rarity: Rarity) => {
		setClientPos([evt.clientX, evt.clientY])
		setDisplayValue(Math.ceil(item.getValueForLevel(level, rarity)))
	}

	const handleMouseLeave = () => {
		// setClientPos([])
		// setDisplayValue(undefined);
	}

	return (
		<div className="App">
			<ItemsWrapper items={items} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />
			<div className="level-slider">
				<input type="number" value={level} onChange={evt => setLevel(parseInt(evt.target.value))} min={1} max={80}/>
			</div>
			{clientPos.length && displayValue && <div className="value-wrapper" style={{
				left: clientPos[0],
				top: clientPos[1]
			}}>{displayValue}</div>}
		</div>
	);
}

export default App;
