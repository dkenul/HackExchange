var AnswerIndex = React.createClass ({

  getInitialState: function() {
    return {
      answers: AnswerStore.all()
    };
  },

  componentDidMount: function() {
    AnswerStore.addChangeListener(this._onChange);
    AnswerApiUtil.fetchAnswersForQuestion(this.props.questionId);

    // tinymce.init({
    //   selector:'textarea',
    //   plugins: "preview",
    //   toolbar: "preview"
    // });
  },

  componentWillUnmount: function() {
    AnswerStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({answers: AnswerStore.all()});
  },

  isMember: function() {

    var userIsMember = false;

    if (this.props.currentUser && this.props.currentUser.communities) {
      this.props.currentUser.communities.forEach(function(community) {
        if (this.props.communityId == community.id) {
          userIsMember = true;
        }
      }.bind(this));
    }

    return userIsMember;
  },

  submitAnswer: function(e) {
    e.preventDefault();

    var answer = {
      author_id: this.props.currentUser.id,
      question_id: this.props.questionId,
      description: $(e.currentTarget).serializeJSON().description
    };

    if (this.props.currentUser.id && this.isMember()) {
      AnswerApiUtil.createAnswer(answer);
    } else {
      // error handling
    }
  },

  render: function() {
    var answers = this.state.answers.map(function(answer) {
      return (
          <div className="answer group" key={answer.id}>
            <p>{answer.description}</p>
            <div className="author-display">{answer.author.username}</div>
          </div>
        );
    });

    var numAnswers;
    if (this.state.answers.length === 0) {
      numAnswers = <div className="num-answers">Be the first to Answer</div>;
    } else if (this.state.answers.length == 1) {
      numAnswers = <div className="num-answers">{this.state.answers.length + " Answer"}</div>;
    } else {
      numAnswers = <div className="num-answers">{this.state.answers.length + " Answers"}</div>;
    }


    return (
      <div>
        {numAnswers}

        <div className="answers-container">
          {answers}
        </div>

        <form className="answer-form" onSubmit={this.submitAnswer}>
          <label>
            <h3>Your Answer</h3>
            <textarea name="description"></textarea>
          </label>

          <button className="submit-answer">Post Answer</button>
        </form>
      </div>
    );
  }

});
