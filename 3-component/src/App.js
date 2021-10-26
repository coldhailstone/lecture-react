import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: ""
        };
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.handleReset();
        }
        
        this.setState({ searchKeyword });
    }

    search(searchKeyword) {
        console.log(searchKeyword);
    }

    handleReset() {
        console.log("handleReset");
    }

    render() {
        return (
            <>
                <Header title="검색" />
                <div className="container">
                    <SearchForm
                        value={this.state.searchKeyword}
                        onChange={this.handleChangeInput.bind(this)}
                        onSubmit={this.search.bind(this)} 
                        onReset={this.handleReset.bind(this)}
                    />
                </div>
            </>
        );
    }
}