var Header = React.createClass ({



  render: function() {
    return (
      <div className="header-container">
        <header className="header group">
          <p>{this.props.currentCommunity}</p>
        </header>
      </div>
    );
  }
});
