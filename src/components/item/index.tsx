import {Item as ItemModel, Rarity} from "../../models";
import React, {useState} from "react";
import "./index.scss";

interface ItemProps {
	item: ItemModel;
	rarity: Rarity;
	level: number;
}

function Item({item, rarity, level}: ItemProps) {
	const [detailsOpen, setDetailsOpen] = useState(false);

	return <>
		<div className={`item item-rarity ${rarity}`} onClick={() => setDetailsOpen(true)}>
			<img src={item.getImageUrl()} alt={`${item.name}-${rarity}`}/>
			<p className="level">{level}</p>
		</div>
		{detailsOpen && <div className="modal fade show" style={{display: "block"}}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p>Modal body text goes here.</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>}
	</>
}

export default Item;
