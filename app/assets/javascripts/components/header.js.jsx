var Header = React.createClass ({
  getInitialState: function() {
    return { community: NavStore.havingId(parseInt(this.props.communityId)) };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({community: NavStore.havingId(parseInt(nextProps.communityId))});
  },

  render: function() {
    var header;
    var nav;
    if (this.state.community === null) {
      header = <a href="#"><img className="logo-in" src={window.images.logoIconLarge} /></a>;
      nav = <ul className='header-nav meta group'>
        <li><a href={"#/communities"}>All Communities</a></li>
      </ul>;
    } else {
      header = <p>{this.state.community.name}</p>;
      nav = <ul className="header-nav sub group">
        <li>Questions</li>
        <li>Tags</li>
        <li>Users</li>
        <li>Badges</li>
        <li>Unanswered</li>
        <li>Ask Question</li>
      </ul>;
    }

    return (
      <div className="header-container">
        <header className="header group">
          {header}
          {nav}
        </header>
      </div>
    );
  }
});
