var CommunityShow = React.createClass ({
  getInitialState: function() {
    return { community: CommunityStore.havingId(parseInt(this.props.params.community_id)) };
  },

  componentDidMount: function() {
    CommunityStore.addChangeListener(this._onChange);
    ApiUtil.fetchSingleCommunity(this.props.params.community_id);
  },

  componentWillUnmount: function() {
    CommunityStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({community: CommunityStore.havingId(parseInt(this.props.params.community_id))});
  },

  componentWillReceiveProps: function(nextProps) {
    ApiUtil.fetchSingleCommunity(nextProps.params.community_id);
  },

  render: function() {
    var questions;
    if (this.state.community && this.state.community.questions) {
      questions = this.state.community.questions.map(function(question) {
        return (
          <li key={question.id}>
            <a href={"#/communities/" + this.state.community.id + "/questions/" + question.id}>{question.title}</a>
          </li>
        );
      }.bind(this));
    } else {
      questions = [];
    }

    return (
      <div className="content-divider group">
        <div className="main" id="content-main">
          <div className="content-nav group">
            <ul className="right-nav">
              <li>Hot</li>
              <li>Live</li>
            </ul>
          </div>

          <div className="questions-container">
            <p>Top Questions</p>
            <ul>
              {questions}
            </ul>
          </div>

          <ul className="pagination group">

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
