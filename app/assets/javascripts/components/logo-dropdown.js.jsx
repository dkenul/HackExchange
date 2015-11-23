var LogoDropdown = React.createClass ({

  getInitialState: function() {
    return { communities: CommunityStore.all()};
  },

  componentDidMount: function() {
    CommunityStore.addChangeListener(this._onChange);
    ApiUtil.fetchCommunities();
  },

  componentWillUnmount: function() {
    CommunityStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({communities: CommunityStore.all()});
  },

  render: function() {

    var communities = this.state.communities.map(function(community) {
      return (
        <div className="community-item-container" key={community.id}>
          <a href={"#/" + community.name + "/" + community.id} className="community-item group">
            <img src="http://placecorgi.com/25/25" className="community-item-thumb" />
            <div className="text-container">
              <div className="community-name">{community.name}</div>
              <div className="community-description">{community.description}</div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <div>
        <header><h2>Current Community</h2></header>
        <div className="blueline"><p><a href="#">HackExchange Home</a></p>
        <p>needs to be a sprite</p>
        <p>so is this pink color :)</p><p>bla</p></div>
        <header><h2>Your Communities</h2></header>
        <div><p>bla</p><p>bla</p></div>
        <header><h2><a href="#/communities">All Communities</a></h2></header>
        <div>
          {communities}
        </div>

      </div>
    );
  }

});
