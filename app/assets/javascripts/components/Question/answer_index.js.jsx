var AnswerIndex = React.createClass ({

  getInitialState: function() {
    return {answers: AnswerStore.all()};
  },

  componentDidMount: function() {
    AnswerStore.addChangeListener(this._onChange);
    AnswerApiUtil.fetchAnswersForQuestion(this.props.questionId);
  },

  componentWillUnmount: function() {
    AnswerStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({answers: AnswerStore.all()});
  },

  render: function() {
    var answers = this.state.answers.map(function(answer) {
      return <div className="answer" key={answer.id}>{answer.description}</div>;
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
      </div>
    );
  }

});
