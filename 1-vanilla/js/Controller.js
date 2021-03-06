import { TabType } from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
    constructor(store, { searchFormView, searchResultView, tabView, keywordListView, historyListView }) {
        console.log(tag);

        this.store = store;

        this.searchFormView = searchFormView;
        this.searchResultView = searchResultView;
        this.tabView = tabView;
        this.keywordListView = keywordListView;
        this.historyListView = historyListView;

        this.subscribeViewEvents();
        this.render();
    }

    subscribeViewEvents() {
        this.searchFormView
            .on('@submit', (e) => this.search(e.detail.value))
            .on('@reset', () => this.reset())
        
        this.tabView.on('@change', (e) => this.changeTab(e.detail.value));

        this.keywordListView.on('@click', (e) => this.search(e.detail.value));

        this.historyListView
            .on('@click', (e) => this.search(e.detail.value))
            .on('@remove', (e) => this.removeHistory(e.detail.value));
    }

    search(keyword) {
        this.store.search(keyword);
        this.render();
    }

    reset() {
        this.store.searchKeyword = '';
        this.store.searchResult = [];
        this.render();
    }

    changeTab(tab) {
        this.store.selectedTab = tab;
        this.render();
    }

    removeHistory(keyword) {
        this.store.removeHistory(keyword);
        this.render();
    }

    render() {
        if (this.store.searchKeyword.length > 0) {
            return this.renderSearchResult();
        }

        this.tabView.show(this.store.selectedTab);
        if (this.store.selectedTab === TabType.KEYWORD) {
            this.keywordListView.show(this.store.getKeywordList());
            this.historyListView.hide();
        } else if (this.store.selectedTab === TabType.HISTORY) {
            this.keywordListView.hide();
            this.historyListView.show(this.store.getHistoryList());
        } else {
            throw '사용할 수 없는 탭입니다.';
        }

        this.searchResultView.hide();
    }

    renderSearchResult() {
        this.searchFormView.show(this.store.searchKeyword);
        this.tabView.hide();
        this.keywordListView.hide();
        this.historyListView.hide();

        this.searchResultView.show(this.store.searchResult);
    }
}