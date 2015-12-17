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
      header =
        <p>
          <img
            className="community-logo"
            src={window.images[this.state.community.name] ? window.images[this.state.community.name] : window.images.Default}
          />
          <a
            className="community-name"
            href={"#/communities/" + this.state.community.id }>
            {this.state.community.name}
          </a>
        </p>;

      nav = <ul className="header-nav sub group">
        <li><a href={"#/communities/" + this.state.community.id }>Top Questions</a></li>
        <li><a href={"#/communities/" + this.state.community.id + "?recent"}>Recent</a></li>
        <li><a href={"#/communities/" + this.state.community.id + "?unanswered"}>Unanswered</a></li>
        <li><a href={"#/communities/" + this.state.community.id + "?ask"}>Ask Question</a></li>
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
