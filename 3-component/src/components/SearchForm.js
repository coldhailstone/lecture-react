import React from 'react';

export default class SearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.searchKeyword);
    }

    handleReset() {
        this.props.onReset();
    }

    handleChangeInput(e) {
        const searchKeyword = e.target.value;

        if (searchKeyword.length <= 0) {
            this.handleReset();
        }

        this.setState({ searchKeyword });
    }

    render() {
        return (
            <form 
                onSubmit={this.handleSubmit.bind(this)} 
                onReset={this.handleReset.bind(this)}
            >
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