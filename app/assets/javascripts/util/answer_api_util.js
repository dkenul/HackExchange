var AnswerApiUtil = {
  fetchAnswersForQuestion: function(question_id){
    $.ajax({
      url: 'api/answers',
      type: 'GET',
      dataType: 'json',
      data: {question_id: question_id},
      success: function(answers) {
        AnswerApiActions.receiveAll(answers);
      }
    });
  },

  fetchSingleAnswer: function(id) {
    $.ajax({
      url: 'api/answers/' + id,
      type: 'GET',
      dataType: 'json',
      success: function(answer) {
        AnswerApiActions.receiveSingleAnswer(answer);
      }
    });
  },

  createAnswer: function(answer) {
    $.ajax({
      url: 'api/answers',
      type: 'POST',
      dataType: 'json',
      data: {answer: answer},
      success: function (answer) {
        AnswerApiActions.receiveSingleAnswer(answer);
        // callback && callback(answer.id);
      }
    });
  }
};
