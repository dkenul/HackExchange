var CommentIndex = React.createClass ({

  getInitialState: function() {
    return { comments: CommentStore.all()};
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

  render: function() {

    var comments = this.state.comments.map(function(comment) {
      return (
        <div key={comment.id} className="comment group">
          <p>{comment.description}</p>
        </div>
      );
    });

    return (
      <div className={"comments-container"}>
        {comments}
      </div>
    );
  }

});
