var NavBar = React.createClass ({
  render: function() {
    return(
      <header className="nav-container">
        <nav className="nav group">
          <ul className="left-nav group">
            <li>HELLO FROM THE LOGO</li>
            <li>mail</li>
          </ul>
          <ul className="right-nav group">
            <li>Option1</li>
            <li>Option2</li>
          </ul>
        </nav>
      </header>
    );
  }
});
