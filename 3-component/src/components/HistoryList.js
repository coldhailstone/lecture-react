import React from 'react';
import List from "./List";
import store from '../Store';
import { formatRelativeDate } from '../helpers';

export default class HistoryList extends List {
    componentDidMount() {
        this.fetch();
    }

    fetch() {
        const data = store.getHistoryList();
        this.setState({ data });
    }

    handleClickRemoveHistory(e, keyword) {
        e.stopPropagation();

        store.removeHistory(keyword);
        this.fetch();
    }

    renderItem({ keyword, date }) {
        return (
            <>
                <span>{keyword}</span>
                <span className="date">{formatRelativeDate(date)}</span>
                <button className="btn-remove" onClick={(e) => this.handleClickRemoveHistory(e, keyword)}></button>
            </>
        )
    }
}