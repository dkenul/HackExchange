var QuestionShow = React.createClass ({

  getInitialState: function() {
    return {question: QuestionStore.havingId(parseInt(this.props.params.question_id))};
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


    return (
      <div>{this.state.question.title}</div>
    );
  }

});
