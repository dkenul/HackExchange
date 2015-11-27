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
          <li key={question.id} className="show group">
            <div>
              <h3>{question.times_answered}</h3>
              <p>{question.times_answered === 1 ? "answer" : "answers"}</p>
            </div>
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
            <ul className="left-nav">
              <li>Top Questions</li>
            </ul>
            <ul className="right-nav">
              <li className="clicked">Hot</li>
              <li>New</li>
              <li>Live</li>
            </ul>
          </div>

          <div className="questions-container group">
            <ul>
              {questions}
            </ul>
          </div>

          <ul className="pagination group">

          </ul>

        </div>

        <SideBar />
      </div>
    );
  }
});
