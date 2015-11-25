var QuestionShow = React.createClass ({

  getInitialState: function() {
    return {question: QuestionStore.havingId(parseInt(this.props.params.question_id)) || {title: "", description: ""}};
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
      <div className="content-divider group">
        <div className="main" id="content-main">
          <div className="content-nav group">
            <div className="title">{this.state.question.title}</div>
          </div>
          <div className="question">{this.state.question.description}</div>
        </div>

        <SideBar />
      </div>

    );
  }

});
