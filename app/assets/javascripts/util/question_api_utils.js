window.QuestionApiUtil = {
  fetchQuestions: function(){
    $.ajax({
      url: 'api/questions',
      type: 'GET',
      dataType: 'json',
      success: function(questions) {
        ApiActions.receiveAll(questions);
      }
    });
  },

  createQuestion: function(community) {
    $.ajax({
      url: 'api/questions',
      type: 'POST',
      dataType: 'json',
      data: {question: question},
      success: function (question) {
        ApiActions.receiveSingleQuestion(question);
        callback && callback(question.id);
      }
    });
  }
};
