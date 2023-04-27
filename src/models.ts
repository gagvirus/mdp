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
}

export {Item};
