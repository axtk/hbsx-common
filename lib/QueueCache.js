module.exports = class QueueCache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.map = {};
        this.keyQueue = [];
    }
    set(key, value) {
        if (this.maxSize < 1) return;

        let hadKey = key in this.map;

        this.map[key] = value;

        if (!hadKey) {
            this.keyQueue.push(key);
            this.revise();
        }
    }
    get(key) {
        return this.map[key];
    }
    has(key) {
        return key in this.map;
    }
    revise() {
        while (this.keyQueue.length >= Math.max(this.maxSize, 0))
            delete this.map[this.keyQueue.shift()];
    }
};
