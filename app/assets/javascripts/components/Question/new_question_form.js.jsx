var NewQuestionForm = React.createClass ({

  mixins: [ReactRouter.History],

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

  submitQuestion: function(e) {
    e.preventDefault();

    var membershipId
    this.props.currentUser.communities.forEach(function(community) {
      if (this.props.communityId == community.id) {
        membershipId = community.membership_id
      }
    }.bind(this));

    var question = {
      membership_id: membershipId,
      title: $(e.currentTarget).serializeJSON().title,
      description: $(e.currentTarget).serializeJSON().description
    };

    if (this.props.currentUser.id && this.isMember()) {
      QuestionApiUtil.createQuestion(question, function(id) {
        this.history.pushState(null, '/communities/' + this.props.communityId + '/questions/' + id)
      }.bind(this));
    } else {
      // error handling
    }
  },

  render: function() {

    var form;
    if (this.props.currentUser.id && this.isMember()) {
      form =
      <form className="question-form" onSubmit={this.submitQuestion}>

        <label>
          <h3>Title</h3>
          <input type="text" name="title"></input>
        </label>

        <label>
          <h3>Description</h3>
          <textarea name="description"></textarea>
        </label>

        <div>
          <button className="submit-question">Post Question</button>
        </div>
      </form>;
    } else if (this.props.currentUser.id) {
      form = <div>You must be a member of this community to ask a question!</div>;
    } else {
      form = <div>You must be signed in to ask a question!</div>;
    }

    return (
      <div>
        {form}
      </div>
    )
  }
});
