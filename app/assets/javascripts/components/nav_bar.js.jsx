var NavBar = React.createClass ({

  getInitialState: function() {
    return {
      currentUser: CurrentUserStore.currentUser(),
      community: CommunityStore.havingId(parseInt(this.props.communityId)),
      communities: NavStore.all(),
      logoClicked: false,
      loginClicked: false,
      signUpClicked: false
    };
  },

  componentDidMount: function() {
    CurrentUserStore.addChangeListener(this._onUserChange);
    NavStore.addChangeListener(this._onCommunitiesChange);

    NavApiUtil.fetchCommunities();
  },

  componentWillUnmount: function() {
    CurrentUserStore.removeChangeListener(this._onUserChange);
    NavStore.removeChangeListener(this._onCommunitiesChange);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.navReset) {
      this.setState({
        logoClicked: false,
        loginClicked: false,
        signUpClicked: false
      });
    }
  },

  _onUserChange: function() {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  _onCommunitiesChange: function() {
    this.setState({communities: NavStore.all()});
  },

  handleLogoClick: function() {
    this.setState({
      logoClicked: !this.state.logoClicked,
      loginClicked: false,
      signUpClicked: false
    });
  },

  handleLoginClick: function() {
    this.setState({
      logoClicked: false,
      loginClicked: !this.state.loginClicked,
      signUpClicked: false
    });
  },

  handleSignUpClick: function() {
    this.setState({
      logoClicked: false,
      loginClicked: false,
      signUpClicked: !this.state.signUpClicked
    });
  },

  logout: function() {
    SessionsApiUtil.logout();
    this.setState({logoClicked: false, loginClicked: false});
  },

  propagationCanceller: function(e) {
    e.stopPropagation();
  },

  render: function() {
    var logoInjection =
      <div className="logo-dropdown" onClick={this.propagationCanceller}>
        <LogoDropdown
          communities={this.state.communities}
          community={this.state.community} />
      </div>;

    var loginInjection =
      <div className="login-dropdown" onClick={this.propagationCanceller}>
        <SessionForm />
      </div>;

    var signUpInjection =
      <div className="login-dropdown signup-dropdown" onClick={this.propagationCanceller}>
        <NewUser />
      </div>;

    var rightNav;
    if (this.state.currentUser.username === undefined) {
        rightNav =
        <ul className="right-nav group" onClick={this.propagationCanceller}>
          <li className="guest-li"><GuestSession /></li>
          <li
            className={this.state.loginClicked ? "clicked" : ""}
            onClick={this.handleLoginClick}>
            <div>Sign In</div>
            {this.state.loginClicked ? loginInjection : ""}
          </li>

          <li
            className={this.state.signUpClicked ? "clicked" : ""}
            onClick={this.handleSignUpClick}>
            <div>Sign Up</div>
            {this.state.signUpClicked ? signUpInjection : ""}
          </li>

        </ul>;
    } else {
      rightNav =
      <ul className="right-nav group" onClick={this.propagationCanceller}>
        <li>{this.state.currentUser.username}</li>
        <li onClick={this.logout}>Sign Out</li>
      </ul>;
    }

    return(
      <div className="nav-container">
        <nav className="nav group">

          <ul className="left-nav group" onClick={this.propagationCanceller}>
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
