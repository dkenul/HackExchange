var NavBar = React.createClass ({
  render: function() {
    return(
      <div className="nav-container">
        <nav className="nav group">
          <ul className="left-nav group">
            <li>HackExchange</li>
            <li>Mail</li>
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
