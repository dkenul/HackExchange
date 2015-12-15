var QuestionIndex = React.createClass ({

  getInitialState: function() {
    return {
      questions: QuestionStore.all(),
    };
  },

  componentDidMount: function() {
    QuestionStore.addChangeListener(this._onChange);
    QuestionApiUtil.fetchQuestions(1);
  },

  componentWillUnmount: function() {
    QuestionStore.removeChangeListener(this._onChange);
  },

  componentWillUpdate: function() {
    window.scrollTo(0, 0);
  },

  _onChange: function() {
    this.setState({questions: QuestionStore.all()});
  },

  propagationCanceller: function(e) {
    e.stopPropagation();
  },

  render: function() {
    var questions = this.state.questions.map(function(question) {
      return  (
        <li key={question.id} className="group">
          <a href={"#/communities/" + question.community.id + "/questions/" + question.id}>
            <img
              className="community-logo"
              src={window.images[question.community.name] ? window.images[question.community.name] : window.images.Default}
            />
            {question.title}
          </a>
        </li>
      );
    });

    return (
      <div className="questions-container group">
        <ul>
          {questions}
        </ul>
      </div>
    );
  }

});
