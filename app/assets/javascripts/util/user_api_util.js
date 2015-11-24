var UserApiUtil = {

  createUser: function (credentials, callback) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (user) {
        UserActions.receiveUser(user);
        callback && callback();
      }
    });
  }
};
