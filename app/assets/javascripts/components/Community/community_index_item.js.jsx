var CommunityIndexItem = React.createClass ({

  componentDidMount: function() {
    $('.communities').masonry({
      itemSelector: '.community-tile-container',
      columnWidth: 110
    });
  },

  render: function() {
    var community = this.props.community;
    return (
      <div className={"community-tile-container " + "tile-" +this.props.klass} key={community.id}>
        <div className="community-tile">
          <div className="community-name">{community.name}</div>
          <div className="community-description">{community.description}</div>
        </div>
      </div>
    );
  }
});
