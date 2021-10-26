import React from 'react';

const SearchForm = ({ value, onChange, onSubmit, onReset }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }

    const handleReset = () => {
        onReset();
    }

    const handleChangeInput = (e) => {
        onChange(e.target.value);
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            onReset={handleReset}
        >
            <input 
                type="text" 
                placeholder="검색어를 입력하세요"
                autoFocus
                value={value} 
                onChange={handleChangeInput} 
            />
            {value.length > 0 && <button type="reset" className="btn-reset"></button>}
        </form>
    )
}

export default SearchForm;