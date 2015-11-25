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

        <div className="meta-sidebar">
          <h2>Featured Community</h2>
          <div className="featured-community">
            Chemistry
          </div>
          <h2>Top Users</h2>
          <ul className="top-users">
            <li>User0</li>
            <li>User1</li>
            <li>User2</li>
          </ul>
          <h2>Top Communities</h2>
          <ul>
            <li>Lolcode</li>
            <li>Physics</li>
            <li>React</li>
          </ul>
        </div>
      </div>

    );
  }

});
