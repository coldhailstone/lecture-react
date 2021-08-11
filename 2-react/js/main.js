class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchKeyword);
  }

  handleReset() {
    this.setState({ searchKeyword: '' }, () => {
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
    // let resetButton = null;
    // if (this.state.searchKeyword) {
    //   resetButton = <button type="reset" className="btn-reset"></button>
    // }

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form onSubmit={this.handleSubmit.bind(this)} onReset={this.handleReset.bind(this)}>
            <input type="text" placeholder="검색어를 입력하세요" autoFocus value={this.state.searchKeyword} onChange={this.handleChangeInput.bind(this)} />
            {this.state.searchKeyword && (<button type="reset" className="btn-reset"></button>)}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));