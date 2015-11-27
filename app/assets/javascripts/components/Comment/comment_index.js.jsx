var CommentIndex = React.createClass ({

  getInitialState: function() {
    return {
      comments: CommentStore.all(),
      showCommentForm: false
    };
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._onChange);
    CommentApiUtil.fetchCommentsForCommentable(this.props.commentableType, this.props.commentableId);
  },

  componentWillUnmount: function() {
    CommentStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({comments: CommentStore.all()});
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

  submitComment: function(e) {
    e.preventDefault();

    var comment = {
      author_id: this.props.currentUser.id,
      commentable_id: this.props.questionId,
      commentable_type: this.props.commentable_type,
      description: $(e.currentTarget).serializeJSON().description
    };

    if (this.props.currentUser.id && this.isMember()) {
      CommentApiUtil.kreateComment(comment);
    } else {
      // error handling
    }
  },

  toggleComment: function(e) {
    this.setState({showCommentForm: !this.state.showCommentForm});
  },

  render: function() {

    var comments = this.state.comments.map(function(comment) {
      return (
        <div key={comment.id} className="comment group">
          <p>{comment.description}</p>
          <div className="comment-author">{"by " + comment.author.username}</div>
        </div>
      );
    });


    return (
      <div className={"comments-container"}>
        {comments}

        <div className="toggler" onClick={this.toggleComment}>Add A Commnet</div>

        <form className={"comment-form " + (this.state.showCommentForm ? "" : "hidden")} onSubmit={this.submitComment}>
          <label>
            <textarea name="description"></textarea>
          </label>

          <button className="submit-comment">Comment</button>
        </form>
      </div>
    );
  }

});
