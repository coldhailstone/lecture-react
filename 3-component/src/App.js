import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

export default class App extends React.Component {
    render() {
        return (
            <>
                <Header title="검색" />
                <div className="container">
                    <SearchForm />
                </div>
            </>
        );
    }
}