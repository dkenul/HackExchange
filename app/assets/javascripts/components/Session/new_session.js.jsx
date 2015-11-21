(function(root) {
  root.SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();

      var credentials = $(e.currentTarget).serializeJSON();
      SessionsApiUtil.login(credentials, function () {
        // this.history.pushState(null, "/users");
      }.bind(this));
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
                <h2>Password</h2>
              </header>
              <div>
                <input type="password" name="password" />
              </div>
            </label>

            <button>Log In!</button>
          </form>
      );
    },

  });
})(this);
