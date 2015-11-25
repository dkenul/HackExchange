var CommunityShow = React.createClass ({
  getInitialState: function() {
    return { community: CommunityStore.havingId(parseInt(this.props.params.community_id)) };
  },

  componentDidMount: function() {
    CommunityStore.addChangeListener(this._onChange);
    if (this.state.community) {
      ApiUtil.fetchSingleCommunity(this.state.community.id);
    } else {
      ApiUtil.fetchSingleCommunity(this.props.params.community_id);
    }
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
        return <li key={question.id}>{question.title}</li>;
      });
    } else {
      questions = [];
    }

    return (
      <div className="questions-container">
        <p>Top Questions</p>
        <ul>
          {questions}
        </ul>
      </div>
    );
  }
});
