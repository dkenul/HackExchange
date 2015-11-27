var LogoDropdown = React.createClass ({

  render: function() {
    var communities = this.props.communities.map(function(community) {
      return (
        <div className="community-item-container" key={community.id}>
          <a href={"#/communities/" + community.id} className="community-item group">
            <img src="http://placecorgi.com/25/25" className="community-item-thumb" />
            <div className="text-container">
              <div className="community-name">{community.name}</div>
              <div className="community-description">{community.description}</div>
            </div>
          </a>
        </div>
      );
    });

    var userCommunities;
    if (this.props.currentUser && this.props.currentUser.communities) {
      if (this.props.currentUser.communities.length === 0) {
        userCommunities = <p>You are not a member of any communities!</p>;
      } else {
        userCommunities = this.props.currentUser.communities.map(function(community) {
          return (
            <div className="community-item-container" key={community.id}>
              <a href={"#/communities/" + community.id} className="community-item group">
                <img src="http://placecorgi.com/25/25" className="community-item-thumb" />
                <div className="text-container">
                  <div className="community-name">{community.name}</div>
                  <div className="community-description">{community.description}</div>
                </div>
              </a>
            </div>
          );
        });
      }
    } else {
      userCommunities = <p>You must be signed in to view your communities.</p>;
    }

    var community = this.props.community;
    var linkInsertion;
    var textInsertion;
    if (community) {
      linkInsertion = "#/communities/" + community.id;
      textInsertion = community.name;
    } else {
      linkInsertion = "#";
      textInsertion = "Meta";
    }

    return (
      <div>
        <header><h2>Current Community</h2></header>
        <div className="blueline">
        <p><a href="#">HackExchange Home</a></p>
        <p><a className="nested-1" href={linkInsertion}>{textInsertion}</a></p></div>
        <header><h2>Your Communities</h2></header>
        <div>
          {userCommunities}
        </div>
        <header><h2><a href="#/communities">All Communities</a></h2></header>
        <div>
          {communities}
        </div>

      </div>
    );
  }

});
