var NavBar = React.createClass ({

  getInitialState: function() {
    return {
      community: NavStore.havingId(parseInt(this.props.communityId)),
      communities: NavStore.all(),
      currentUser: this.props.currentUser,
      logoClicked: false,
      loginClicked: false,
      signUpClicked: false
    };
  },

  componentDidMount: function() {
    NavStore.addChangeListener(this._onCommunitiesChange);

    NavApiUtil.fetchCommunities();
  },

  componentWillUnmount: function() {
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

    if (nextProps.currentUser) {
      this.setState({
        currentUser: nextProps.currentUser
      });
    }
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

  joinCommunity: function() {
    var membership = {
      user_id: this.state.currentUser.id,
      community_id: this.state.community.id
    };

    MembershipApiUtil.createMembership(membership);
  },

  render: function() {
    var logoInjection =
      <div className="logo-dropdown" onClick={this.propagationCanceller}>
        <LogoDropdown
          communities={this.state.communities}
          community={this.state.community}
          currentUser={this.props.currentUser} />
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
    if (Object.keys(this.state.currentUser).length === 0) {
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
      var joinCommunityLi;
      var profileLi;
      var newCommunityLi = <li>New Community</li>;
      if (this.props.communityId !== "meta") {
        var isMember = false;
        this.state.currentUser.communities.forEach(function(community) {
          if (this.props.communityId == community.id) {
            isMember = true;
          }
        }.bind(this));

        if (isMember) {
          profileLi = <a href={'#/users/' + this.state.currentUser.id}>Profile</a>;
        } else {
          joinCommunityLi = (
            <li onClick={this.joinCommunity}>Join Current Community</li>
          );
        }
      } else {
        profileLi = <a href={'#/users/' + this.state.currentUser.id}>{this.state.currentUser.username}</a>;
      }


      rightNav =
      <ul className="right-nav group" onClick={this.propagationCanceller}>
        {joinCommunityLi}
        {profileLi}
        {newCommunityLi}
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
          </ul>

          {rightNav}

        </nav>

      </div>
    );
  }
});
