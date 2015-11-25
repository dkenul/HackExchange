var HomePage = React.createClass ({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { currentPage: 1 };
  },

  makePages: function(numPages) {

    var result = [];
    for (var i = 0; i < numPages; i++) {
      result.push(
        <li
          className={(i+1 == this.state.currentPage) ? "page clicked" : "page"}
          onClick={this.goToPage}
          data-page={i + 1}
          key={i+1}>
            {i + 1}
        </li>);
    }

    return result;
  },

  goToPage: function(e) {
    if (e.currentTarget.dataset.page != this.state.currentPage) {
      QuestionApiUtil.fetchQuestions(e.currentTarget.dataset.page);
      this.setState({ currentPage: e.currentTarget.dataset.page});
    }
  },

  render: function () {
    return(
      <div className="content-divider group">
        <div className="main" id="content-main">
          <div className="content-nav group">
            <ul className="right-nav">
              <li>Hot</li>
              <li>Live</li>
            </ul>
          </div>
          <QuestionIndex />

          <ul className="pagination group">
            {this.makePages(4)}
          </ul>
        </div>

        <div className="meta-sidebar">
          <h2>Featured Community</h2>
          <div className="featured-community">
            Chemistry
          </div>
          <h2>Top Users</h2>
          <ul className="top-users">
            <li>User0</li>
            <li>User1</li>
            <li>User2</li>
          </ul>
          <h2>Top Communities</h2>
          <ul>
            <li>Lolcode</li>
            <li>Physics</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    );
  }
});
