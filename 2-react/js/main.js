import store from './js/store.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: '',
      searchResult: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ searchResult });
  }

  handleReset() {
    this.setState(() => {
      return { searchKeyword: '' }
    }, () => {
      console.log(this.state.searchKeyword);
    });
  }

  handleChangeInput(e) {
    const searchKeyword = e.target.value;

    if (!searchKeyword) {
      return this.handleReset();
    }

    this.setState({ searchKeyword: searchKeyword });
  }

  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
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
            {this.state.searchKeyword && (<button type="reset" className="btn-reset"></button>)}
          </form>
          <div className="content">
            {this.state.searchResult.length > 0 ? (
              <ul className="result">
                {this.state.searchResult.map((item) => {
                  return (
                    <li>
                      <img src={item.imageUrl} alt={item.name} />
                      <p>{item.name}</p>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="empty-box">검색 결과가 없습니다</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));