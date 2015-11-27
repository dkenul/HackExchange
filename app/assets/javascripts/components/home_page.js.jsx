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
              <li className="clicked">Hot</li>
              <li>Live</li>
            </ul>
          </div>
          <QuestionIndex />

          <ul className="pagination group">
            {this.makePages(4)}
          </ul>
        </div>

        <SideBar />
      </div>
    );
  }
});
