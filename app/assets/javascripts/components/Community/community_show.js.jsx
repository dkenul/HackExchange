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
    var recentQuestions = [];
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

      recentQuestions = this.state.community.questions.slice().sort(function(a, b) {
        return a.created_at > b.created_at ? -1 : a.created_at < b.created_at ? 1 : 0;
      });

      recentQuestions = recentQuestions.map(function(question) {
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
      recentQuestions = [];
      questions = [];
    }

    var displayTab;
    var topic;
    var rightNav;
    if (this.props.location.search == "?ask") {
      topic = <li>New Question</li>
      displayTab = <NewQuestionForm
        currentUser={this.props.currentUser}
        communityId={this.state.community.id} />;
      if (this.state.community) {
        rightNav =
          <ul className="right-nav">
            <a href={"#/communities/" + this.props.params.community_id}>Hot</a>
            <a href={"#/communities/" + this.props.params.community_id + "?recent"}>New</a>
          </ul>;
        }
    } else if (this.props.location.search == "?unanswered") {
      topic = <li>Unanswered Questions</li>
      displayTab =
        <div className="questions-container group">
          <ul>
            {unansweredQuestions}
          </ul>
        </div>;
      if (this.state.community) {
        rightNav =
          <ul className="right-nav">
            <a href={"#/communities/" + this.props.params.community_id}>Hot</a>
            <a href={"#/communities/" + this.props.params.community_id + "?recent"}>New</a>
          </ul>;
        }
    } else if (this.props.location.search == "?recent") {
      topic = <li>Recent Questions</li>
      displayTab =
        <div className="questions-container group">
          <ul>
            {recentQuestions}
          </ul>
        </div>;
      if (this.state.community) {
        rightNav =
          <ul className="right-nav">
            <a href={"#/communities/" + this.props.params.community_id}>Hot</a>
            <a className="clicked" href={"#/communities/" + this.props.params.community_id + "?recent"}>New</a>
          </ul>;
        }
    } else {
      topic = <li>Top Questions</li>
      displayTab =
        <div className="questions-container group">
          <ul>
            {questions}
          </ul>
        </div>;
      if (this.state.community) {
        rightNav =
          <ul className="right-nav">
            <a className="clicked" href={"#/communities/" + this.props.params.community_id}>Hot</a>
            <a href={"#/communities/" + this.props.params.community_id + "?recent"}>New</a>
          </ul>;
        }
    }

    return (
      <div className="content-divider group">
        <div className="main" id="content-main">
          <div className="content-nav group">
            <ul className="left-nav">
              {topic}
            </ul>
            {rightNav}
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
