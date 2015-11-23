var NavBar = React.createClass ({

  getInitialState: function() {
    return {
      currentUser: CurrentUserStore.currentUser(),
      logoClicked: false,
      loginClicked: false
    };
  },

  componentDidMount: function() {
    CurrentUserStore.addChangeListener(this._onUserChange);
  },

  componentWillUnmount: function() {
    CurrentUserStore.removeChangeListener(this._onUserChange);
  },

  _onUserChange: function() {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  handleLogoClick: function(event) {
    this.setState({logoClicked: !this.state.logoClicked, loginClicked: false});
  },

  handleLoginClick: function(event) {
    this.setState({loginClicked: !this.state.loginClicked, logoClicked: false});
  },

  logout: function() {
    SessionsApiUtil.logout();
    this.setState({logoClicked: false, loginClicked: false});
  },

  propagationCanceller: function(event) {

  },

  render: function() {
    var logoInjection =
      <div className="logo-dropdown" onClick={this.propagationCanceller}>
        <LogoDropdown />
      </div>;

    var loginInjection =
      <div className="login-dropdown" onClick={this.propagationCanceller}>
        <SessionForm />
      </div>;

    var rightNav;
    if (this.state.currentUser.username === undefined) {
        rightNav =
        <ul className="right-nav group">
          <li
            className={this.state.loginClicked ? "clicked" : ""}
            onClick={this.handleLoginClick}>
            Sign In
          </li>
            {this.state.loginClicked ? loginInjection : ""}
          <li>Sign Up</li>
        </ul>;
    } else {
      rightNav =
      <ul className="right-nav group">
        <li>{this.state.currentUser.username}</li>
        <li onClick={this.logout}>Sign Out</li>
      </ul>;
    }

    return(
      <div className="nav-container">
        <nav className="nav group">

          <ul className="left-nav group">
            <li
              className={this.state.logoClicked ? "clicked" : ""}
              onClick={this.handleLogoClick}>
              <img
                className="logo-icon"
                src={this.state.logoClicked ? window.images.logoIconClicked : window.images.logoIcon} />
            </li>
            {this.state.logoClicked ? logoInjection : ""}
            <li><img className="mail-icon" src={window.images.mailIcon} /></li>
          </ul>

          {rightNav}

        </nav>

      </div>
    );
  }
});
