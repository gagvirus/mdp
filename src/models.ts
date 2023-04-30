const LEVEL_COEFFICIENT = 1.05;
const RARITY_COEFFICIENT = 1.2;

export type Rarity = "common" | "uncommon" | "rare" | "epic";
export const RARITIES: Rarity[] = ["epic", "rare", "uncommon", "common"];

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

    getMaxLevelForRarity(rarity: Rarity) {
        const maxLevels = {
            common: 20,
            uncommon: 40,
            rare: 60,
            epic: 80,
        }
        return maxLevels[rarity];
    }

    getMarksForRarity(rarity: Rarity) {
        const maxLevels = {
            common: {0: 0, 20: 20},
            uncommon: {0: 0, 20: 20, 40: 40},
            rare: {0: 0, 20: 20, 40: 40, 60: 60},
            epic: {0: 0, 20: 20, 40: 40, 60: 60, 80: 80},
        }
        return maxLevels[rarity];
    }
}

export {Item};
