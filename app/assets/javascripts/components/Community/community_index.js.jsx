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
    var communities = this.state.communities.map(function(community, i) {
      return (
          <CommunityIndexItem community={community} klass={i}/>
      );
    });

    return (
      <div className="communities group">
        {communities}
      </div>
    );
  }

});
