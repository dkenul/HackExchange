var NavBar = React.createClass ({

  getInitialState: function() {
    return {
      logoClicked: false,
      loginClicked: false
    };
  },

  handleLogoClick: function(event) {
    this.setState({logoClicked: !this.state.logoClicked, loginClicked: false});
  },

  handleLoginClick: function(event) {
    this.setState({loginClicked: !this.state.loginClicked, logoClicked: false});
  },

  propagationCanceller: function(event) {
    event.stopPropagation();
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

    return(
      <div className="nav-container">
        <nav className="nav group">

          <ul className="left-nav group">
            <li
              className={this.state.logoClicked ? "clicked" : ""} onClick={this.handleLogoClick}>
              <img className="logo-icon" src={window.images.logoIcon} />
            </li>
            {this.state.logoClicked ? logoInjection : ""}
            <li><img className="mail-icon" src={window.images.mailIcon} /></li>
          </ul>

          <ul className="right-nav group">
            <li
              className={this.state.loginClicked ? "clicked" : ""}
              onClick={this.handleLoginClick}>
              Sign In
            </li>
            {this.state.loginClicked ? loginInjection : ""}
            <li>Sign Up</li>
          </ul>

        </nav>

      </div>
    );
  }
});
