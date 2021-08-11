class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: ''
    };
  }

  handleChangeInput(e) {
    // this.state.searchKeyword = e.target.value;
    // this.forceUpdate();

    this.setState({
      searchKeyword: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchKeyword);
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
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="검색어를 입력하세요" autoFocus value={this.state.searchKeyword} onChange={this.handleChangeInput.bind(this)} />
            {this.state.searchKeyword && (<button type="reset" className="btn-reset"></button>)}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));