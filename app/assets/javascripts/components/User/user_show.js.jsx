var userShow = React.createClass ({

  getInitialState: function() {
    return {
      user: UsersStore.findUserById(parseInt(this.props.params.user_id)),
      currentClicked: "communities"
    }
  },

  componentDidMount: function() {
    UsersStore.addChangeListener(this._onChange)
    UserApiUtil.fetchSingleUser(this.props.params.user_id)
  },

  componentWillUnmount: function() {
    UsersStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({user: UsersStore.findUserById(parseInt(this.props.params.user_id))});
  },

  render: function() {



    var username;
    var bottomSectionContent;
    if (this.state.user) {
      username = this.state.user.username;

      if (this.state.currentClicked == "communities") {
        bottomSectionContent = this.state.user.communities.map(function(community) {
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
    }

    return (
      <div className="profile-container">
        <div className="top-section">
          <div className="username">
            {username}
          </div>
        </div>

        <div className="bottom-section">
          <ul className="bottom-section-nav group" key="b-s-n">
            <li>Questions</li>
            <li>Answers</li>
            <li>Reputation</li>
            <li>Communities</li>
          </ul>

          <div className="bottom-section-content">
            {bottomSectionContent}
          </div>
        </div>
      </div>
    );
  }

});
