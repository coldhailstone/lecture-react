import store from './js/store.js';

const TabType = {
  KEYWORD: 'KEYWORD',
  HISTORY: 'HISTORY'
}

const TabLabel = {
  [TabType.KEYWORD]: '추천 검색어',
  [TabType.HISTORY]: '최근 검색어',
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: '',
      searchResult: [],
      submitted: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ 
      searchResult,
      submitted: true
    });
  }

  handleReset() {
    this.setState({
      searchKeyword: '',
      submitted: false
    }, () => {
      console.log(this.state.searchKeyword);
    });
  }

  handleChangeInput(e) {
    const searchKeyword = e.target.value;

    if (!searchKeyword) {
      return this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  render() {
    const searchForm = (
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
    );
    
    const searchResult = this.state.searchResult.length > 0 ? (
      <ul className="result">
        {this.state.searchResult.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
            </li>
          )
        })}
      </ul>
    ) : (
      <div className="empty-box">검색 결과가 없습니다</div>
    );

    // TODO:
    const tabs = (
      <ul className="tabs">
        {Object.values(TabType).map(tabType => {
          return <li key={tabType}>{TabLabel[tabType]}</li>;
        })}
      </ul>
    )

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submitted ? searchResult : tabs}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));