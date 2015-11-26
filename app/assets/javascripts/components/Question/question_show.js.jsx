var QuestionShow = React.createClass ({

  getInitialState: function() {
    return {
      question: QuestionStore.havingId(parseInt(this.props.params.question_id)) || {title: "", description: ""},
      currentUser: CurrentUserStore.currentUser()
    };
  },

  componentDidMount: function() {
    QuestionStore.addChangeListener(this._onChange);
    QuestionApiUtil.fetchSingleQuestion(this.props.params.question_id);
  },

  componentWillUnmount: function() {
    QuestionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({question: QuestionStore.havingId(parseInt(this.props.params.question_id))});
  },

  isMember: function() {

    this.userIsMember = false;
    if (this.state.currentUser) {
      debugger;
      this.state.currentUser.communities.forEach(function(community) {
        if (this.props.params.community_id == community.id) {
          this.userIsMember = true;
        }
      }.bind(this));
    }

    return this.userIsMember;
  },

  submitAnswer: function(e) {
    e.preventDefault();
  },

  render: function() {

    var answerForm;
    currentUser = CurrentUserStore.currentUser();
    if (this.isMember(currentUser)) {
      answerForm = (
        <form className="answer-form" onSubmit={this.submitAnswer}>
          <label>Post an Answer
            <textarea name="description"></textarea>
          </label>

          <button>Submit</button>
        </form>
      );
    }

    return (
      <div className="content-divider group">
        <div className="main" id="content-main">
          <div className="content-nav group">
            <div className="title">{this.state.question.title}</div>
          </div>
          <div className="question">{this.state.question.description}</div>

          {answerForm}
        </div>

        <SideBar />
      </div>

    );
  }

});
