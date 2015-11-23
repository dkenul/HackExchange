var CommunityIndex = React.createClass ({

  getInitialState: function() {
    return {
      communities: CommunityStore.all(),
      clickedTile: -1
    };
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

  handleClick: function(idx) {
    this.setState({clickedTile: idx});
  },

  render: function() {
    var communities = this.state.communities.map(function(community, i) {
      return (
          <CommunityIndexItem
            community={community}
            idx={i}
            clickedTile={this.state.clickedTile}
            handleClick={this.handleClick}/>
      );
    }.bind(this));

    return (
      <div className="communities group">
        <div class="grid-sizer"></div>
        {communities}
      </div>
    );
  }

});
