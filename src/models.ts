const LEVEL_COEFFICIENT = 1.05;
const RARITY_COEFFICIENT = 1.2;

export type Rarity = "common" | "uncommon" | "rare" | "epic";

class Item {
    public type: string;
    public name: string;
    public value: number;

    constructor(type: string, name: string, value: number) {
        this.type = type;
        this.name = name;
        this.value = value;
    }

    getImageUrl() {
        return `/images/${this.name}.png`;
    }

    getValueForLevel(level: number, rarity: Rarity) {
        return Math.ceil(this.value * Math.pow(LEVEL_COEFFICIENT, (level - 1))) * this.getRarityMultiplier(rarity);
    }

    getRarityMultiplier(rarity: Rarity) {
        const rarities = {
            common: 1,
            uncommon: 2,
            rare: 3,
            epic: 4,
        }
        return Math.pow(RARITY_COEFFICIENT, rarities[rarity] - 1);
    }
}

export {Item};
