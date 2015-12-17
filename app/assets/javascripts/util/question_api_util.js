var QuestionApiUtil = {
  fetchQuestions: function(page){
    $.ajax({
      url: 'api/questions',
      type: 'GET',
      dataType: 'json',
      data: {page: page},
      success: function(questions) {
        QuestionApiActions.receiveAll(questions);
      }
    });
  },

  fetchSingleQuestion: function(id) {
    $.ajax({
      url: 'api/questions/' + id,
      type: 'GET',
      dataType: 'json',
      success: function(question) {
        QuestionApiActions.receiveSingleQuestion(question);
      }
    });
  },

  createQuestion: function(question, callback) {
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
