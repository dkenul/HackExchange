var QuestionIndex = React.createClass ({

  getInitialState: function() {
    return {
      questions: QuestionStore.all(),
      currentPage: 1
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

  makePages: function(numPages) {
    var result = [];
    for (var i = 0; i < numPages; i++) {
      result.push(<li className="page" onClick={this.goToPage} data-page={i + 1}>{i + 1}</li>);
    }

    return result;
  },

  goToPage: function(e) {
    QuestionApiUtil.fetchQuestions(e.currentTarget.dataset.page);
  },

  render: function() {

    var questions = this.state.questions.map(function(question) {
      return <li key={question.id}>{question.title}</li>;
    });

    return (
      <div className="questions-container">
        <ul>
          {questions}
        </ul>

        <ul className="pagination group">
          {this.makePages(4)}
        </ul>
      </div>
    );
  }

});
