var CommentApiUtil = {
  fetchCommentsForCommentable: function(commentable_type, commentable_id){
    $.ajax({
      url: 'api/comments',
      type: 'GET',
      dataType: 'json',
      data: {
        commentable_type: commentable_type,
        commentable_id: commentable_id
      },
      success: function(comments) {
        CommentApiActions.receiveAll(comments);
      }
    });
  },

  fetchSingleComment: function(id) {
    $.ajax({
      url: 'api/comments/' + id,
      type: 'GET',
      dataType: 'json',
      success: function(comment) {
        CommentApiActions.receiveSingleComment(comment);
      }
    });
  },

  createComment: function(comment) {
    $.ajax({
      url: 'api/comments',
      type: 'POST',
      dataType: 'json',
      data: {comment: comment},
      success: function (comment) {
        CommentApiActions.receiveSingleComment(comment);
        // callback && callback(comment.id);
      }
    });
  }
};
