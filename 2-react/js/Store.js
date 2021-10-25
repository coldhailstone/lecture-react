import storage from './storage.js';

const tag = "[store]";

class Store {
    constructor(storage) {
        console.log(tag);

        if (!storage) throw "no storage";

        this.storage = storage;
    }

    search(keyword) {
        return this.storage.productData.filter((product) => product.name.includes(keyword));
    }

    getKeywordList() {
        return this.storage.keywordData;
    }

    getHistoryList() {
        return this.storage.historyData.sort(this._sortHistory);
    }

    _sortHistory(history1, history2) {
        return history2.date > history1.date;
    }
}

const store = new Store(storage);
export default store;