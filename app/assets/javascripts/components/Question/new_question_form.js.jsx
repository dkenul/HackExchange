var NewQuestionForm = React.createClass ({

  submitQuestion: function() {

  },

  render: function() {
    return (
      <form className="question-form" onSubmit={this.submitQuestion}>

        <label>
          <h3>Title</h3>
          <input type="text" name="title"></input>
        </label>

        <label>
          <h3>Description</h3>
          <textarea name="description"></textarea>
        </label>

        <button className="submit-question">Post Question</button>
      </form>
    )
  }
});
