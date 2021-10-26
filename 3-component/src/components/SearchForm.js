import React from 'react';

export default class SearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: ""
        };
    }

    handleChangeInput(e) {
        const searchKeyword = e.target.value;
        this.setState({ searchKeyword });
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="검색어를 입력하세요"
                    autoFocus
                    value={this.state.searchKeyword} 
                    onChange={this.handleChangeInput.bind(this)} 
                />
                {this.state.searchKeyword && (
                    <button type="reset" className="btn-reset"></button>
                )}
            </form>
        )
    }
}