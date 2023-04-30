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

    getMoneyCost(level: number) {
        return (level) * 150;
    }

    getTokenCost(level: number) {
        return (level) * 2;
    }

    getTotalMoneyCost(level: number) {
        let total = 0;
        for (let i = 1; i <= level; i++) {
            total += this.getMoneyCost(i);
        }
        return total;
    }

    getTotalTokenCost(level: number) {
        let total = 0;
        for (let i = 1; i <= level; i++) {
            total += this.getTokenCost(i);
        }
        return total;
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
            common: {1: 1, 20: 20},
            uncommon: {1: 1, 20: 20, 40: 40},
            rare: {1: 1, 20: 20, 40: 40, 60: 60},
            epic: {1: 1, 20: 20, 40: 40, 60: 60, 80: 80},
        }
        return maxLevels[rarity];
    }
}

export {Item};
