var QuestionShow = React.createClass ({

  getInitialState: function() {
    return {
      question: QuestionStore.havingId(parseInt(this.props.params.question_id)) || {title: "", description: ""}
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

  render: function() {
    var question;
    if (this.state.question.author) {
      question = (
        <div className="question group">
          <p>{this.state.question.description}</p>
          <div className="group">
            <div className="author-display">{this.state.question.author.username}</div>
          </div>
          <CommentIndex
            commentableId={this.props.params.question_id}
            commentableType="Question"
            currentUser={this.props.currentUser}
            communityId={this.props.params.community_id}/>
        </div>
      );
    } else {
      question = {};
    }

    return (
      <div className="content-divider group">
        <div className="main" id="content-main">
          <div className="content-nav group">
            <div className="title">{this.state.question.title}</div>
          </div>
          {question}

          <AnswerIndex
            questionId={this.props.params.question_id}
            currentUser={this.props.currentUser}
            communityId={this.props.params.community_id}/>
        </div>

        <SideBar />
      </div>

    );
  }

});
