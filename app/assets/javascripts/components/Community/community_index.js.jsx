var CommunityIndex = React.createClass ({

  getInitialState: function() {
    return {communities: CommunityStore.all()};
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
    debugger;
    var communities = this.state.communities.map(function(community) {
      return (
        <div className="community-tile-container" key={community.id}>
          <div className="community-tile">
            <div className="community-name">{community.name}</div>
            <div className="community-description">{community.description}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="communities group">
        {communities}
      </div>
    );
  }

});
