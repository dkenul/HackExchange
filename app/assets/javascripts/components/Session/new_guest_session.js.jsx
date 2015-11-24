(function(root) {
  root.GuestSession = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();

      var credentials = {username: "Guest", password: "hello6"};
      SessionsApiUtil.login(credentials, function () {
        // this.history.pushState(null, "/users");
      }.bind(this));
    },



    render: function() {

      return (
        <div className="guest-login" onClick={this.submit}>
          Guest Sign In
        </div>
      );

    }

  });
})(this);
