var QuestionApiUtil = {
  fetchQuestions: function(){
    $.ajax({
      url: 'api/questions',
      type: 'GET',
      dataType: 'json',
      success: function(questions) {
        QuestionApiActions.receiveAll(questions);
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
        QuestionApiActions.receiveSingleQuestion(question);
        callback && callback(question.id);
      }
    });
  }
};
