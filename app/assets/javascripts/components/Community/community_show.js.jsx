var CommunityShow = React.createClass ({
  getInitialState: function() {
    return {
      community: CommunityStore.havingId(parseInt(this.props.params.community_id))
    };
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
    var unansweredQuestions = [];
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

      this.state.community.questions.forEach(function(question) {
        if (question.times_answered === 0) {
          unansweredQuestions.push(
            <li key={question.id} className="show group">
              <div>
                <h3>{question.times_answered}</h3>
                <p>answers</p>
              </div>
              <a href={"#/communities/" + this.state.community.id + "/questions/" + question.id}>{question.title}</a>
            </li>
          );
        }
      }.bind(this));
    } else {
      questions = [];
    }

    var displayTab;
    var topic
    if (this.props.location.search == "?ask") {
      topic = <li>New Question</li>
      displayTab = <NewQuestionForm
        currentUser={this.props.currentUser}
        communityId={this.state.community.id} />;
    } else if (this.props.location.search == "?unanswered") {
      topic = <li>Unanswered Questions</li>
      displayTab =
        <div className="questions-container group">
          <ul>
            {unansweredQuestions}
          </ul>
        </div>;
    } else {
      topic = <li>Top Questions</li>
      displayTab =
        <div className="questions-container group">
          <ul>
            {questions}
          </ul>
        </div>;
    }

    return (
      <div className="content-divider group">
        <div className="main" id="content-main">
          <div className="content-nav group">
            <ul className="left-nav">
              {topic}
            </ul>
            <ul className="right-nav">
              <li className="clicked">Hot</li>
              <li>New</li>
              <li>Live</li>
            </ul>
          </div>

          {displayTab}

          <ul className="pagination group">

          </ul>

        </div>

        <SideBar />
      </div>
    );
  }
});
