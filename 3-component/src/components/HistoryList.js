import React from 'react';
import List from "./List";
import store from '../Store';

export default class HistoryList extends React.Component {
    constructor() {
        super();

        this.state = {
            historyList: []
        };
    }
    
    componentDidMount() {
        this.fetch();
    }

    fetch() {
        const historyList = store.getHistoryList();
        this.setState({ historyList });
    }

    handleClickRemove(keyword) {
        // e.stopPropagation();

        store.removeHistory(keyword);
        this.fetch();
    }

    render() {
        const { historyList } = this.state;
        const { onClick } = this.props;

        return (
            <List 
                data={historyList}
                onClick={onClick}
                hasDate={true}
                onRemove={(keyword) => this.handleClickRemove(keyword)}
                // renderItem={(item) => {
                //     return (
                //         <>
                //             <span>{item.keyword}</span>
                //             <span className="date">{formatRelativeDate(item.date)}</span>
                //             <button className="btn-remove" onClick={(e) => this.handleClickRemove(e, item.keyword)}></button>
                //         </>
                //     )
                // }}
            />
        )
    }
}
