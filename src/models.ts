const LEVEL_COEFFICIENT = 1.05;
const RARITY_COEFFICIENT = 1.2;

export type Rarity = "common" | "uncommon" | "rare" | "epic";
export const RARITIES: Rarity[] = ["epic", "rare", "uncommon", "common"];

export type EquipmentType = "main" | "special" | "ultimate" | "launcher" | "armor" | "boots" | "gloves" | "helmet";

export interface Dict<T> {
  [key: string]: T;
}

class Item {
  public type: string;
  public name: string;
  public value: number;
  public rarity: Rarity;
  public level: number;

  constructor(type: string, name: string, value: number, rarity: Rarity, level: number = 1) {
    this.type = type;
    this.name = name;
    this.value = value;
    this.rarity = rarity;
    this.level = level;
  }

  get id() {
    return `${this.name}-${this.rarity}`;
  }

  clone() {
    return new Item(
      this.type,
      this.name,
      this.value,
      this.rarity,
      this.level,
    )
  }

  getImageUrl() {
    return `/images/${this.name}.png`;
  }

  getValueForLevel() {
    return Math.ceil(this.value * Math.pow(LEVEL_COEFFICIENT, (this.level - 1))) * this.getRarityMultiplier();
  }

  getMoneyCost(level?: number) {
    return (level ?? this.level) * 150;
  }

  getTokenCost(level?: number) {
    return (level ?? this.level) * 2;
  }

  getTotalMoneyCost() {
    let total = 0;
    for (let i = 1; i <= this.level; i++) {
      total += this.getMoneyCost(i);
    }
    return total;
  }

  getTotalTokenCost() {
    let total = 0;
    for (let i = 1; i <= this.level; i++) {
      total += this.getTokenCost(i);
    }
    return total;
  }

  getRarityMultiplier() {
    const rarities = {
      common: 1,
      uncommon: 2,
      rare: 3,
      epic: 4,
    }
    return Math.pow(RARITY_COEFFICIENT, rarities[this.rarity] - 1);
  }

  getMaxLevelForRarity() {
    const maxLevels = {
      common: 20,
      uncommon: 40,
      rare: 60,
      epic: 80,
    }
    return maxLevels[this.rarity];
  }

  getMarksForRarity() {
    const maxLevels = {
      common: {1: 1, 20: 20},
      uncommon: {1: 1, 20: 20, 40: 40},
      rare: {1: 1, 20: 20, 40: 40, 60: 60},
      epic: {1: 1, 20: 20, 40: 40, 60: 60, 80: 80},
    }
    return maxLevels[this.rarity];
  }
}

export {Item};
