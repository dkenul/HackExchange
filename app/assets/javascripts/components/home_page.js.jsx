var HomePage = React.createClass ({
  mixins: [ReactRouter.History],

  handleClick: function(event) {
    this.history.pushState(null, "/communities");
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
