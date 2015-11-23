var CommunityShow = React.createClass ({
  getInitialState: function() {
    return { community: CommunityStore.havingId(parseInt(this.props.params.community_id)) };
  },

  componentDidMount: function() {
    CommunityStore.addChangeListener(this._onChange);
    ApiUtil.fetchCommunities();
  },

  componentWillUnmount: function() {
    CommunityStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({community: CommunityStore.havingId(parseInt(this.props.params.community_id))});
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({community: CommunityStore.havingId(parseInt(nextProps.params.community_id))});
  },

  render: function() {
    var questions;
    if (this.state.community) {
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
