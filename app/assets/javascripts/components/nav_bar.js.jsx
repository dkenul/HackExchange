var NavBar = React.createClass ({
  render: function() {
    return(
      <div className="nav-container">
        <nav className="nav group">
          <ul className="left-nav group">
            <li><img className="logo-icon" src={window.images.logoIcon} /></li>
            <li><img className="mail-icon" src={window.images.mailIcon} /></li>
          </ul>
          <ul className="right-nav group">
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </div>
    );
  }
});
