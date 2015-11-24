(function(root) {
  root.NewUser = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();

      var params = {user: $(e.currentTarget).serializeJSON()};
      UserApiUtil.createUser(params, function () {
        SessionsApiUtil.login(params.user);
      });

    },

    render: function() {

      return (
          <form onSubmit={this.submit}>
            <label>
              <header>
                <h2>Username</h2>
              </header>
              <div>
                <input type="text" name="username" />
              </div>
            </label>

            <label>
              <header>
                <h2>Email</h2>
              </header>
              <div>
                <input type="text" name="email" />
              </div>
            </label>

            <label>
              <header>
                <h2>Password</h2>
              </header>
              <div>
                <input type="password" name="password" />
              </div>
            </label>

            <button>Sign Up!</button>
          </form>
      );
    },

  });
})(this);
