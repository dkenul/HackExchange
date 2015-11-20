var NavBar = React.createClass ({

  getInitialState: function() {
    return {
      logoClicked: false,
      loginClicked: false
    };
  },

  handleLogoClick: function(event) {
    if (this.state.logoClicked) {
      event.currentTarget.className = "";
      this.logoInjection = undefined;
      this.setState({logoClicked: false});
    } else {
      event.currentTarget.className = "clicked";
      this.logoInjection =
        <div className="logo-dropdown" onClick={this.propagationCanceller}>
          <LogoDropdown />
        </div>;
      this.setState({logoClicked: true});
    }
  },

  handleLoginClick: function(event) {
    if (this.state.loginClicked) {
      event.currentTarget.className = "";
      this.loginInjection = undefined;
      this.setState({loginClicked: false});
    } else {
      event.currentTarget.className = "clicked";
      this.loginInjection =
        <div className="login-dropdown" onClick={this.propagationCanceller}>
          <SessionForm />
        </div>;
      this.setState({loginClicked: true});
    }
  },

  propagationCanceller: function(event) {
    event.stopPropagation();
  },


  render: function() {
    return(
      <div className="nav-container">
        <nav className="nav group">

          <ul className="left-nav group">
            <li onClick={this.handleLogoClick}>
              <img className="logo-icon" src={window.images.logoIcon} />
            </li>
            {this.logoInjection}
            <li><img className="mail-icon" src={window.images.mailIcon} /></li>
          </ul>

          <ul className="right-nav group">
            <li onClick={this.handleLoginClick}>
              Sign In
            </li>
            {this.loginInjection}
            <li>Sign Up</li>
          </ul>

        </nav>

      </div>
    );
  }
});
