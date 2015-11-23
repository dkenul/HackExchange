var CommunityIndexItem = React.createClass ({

  componentDidMount: function() {
    $('.communities').masonry({
      itemSelector: '.community-tile-container',
      columnWidth: '.grid-sizer',
      PercentPosition: true
    });
  },

  // componentWillReceiveProps: function() {
  //   $('.communities').masonry({
  //     itemSelector: '.community-tile-container',
  //     columnWidth: '.grid-sizer',
  //     PercentPosition: true
  //   });
  // },

  receiveClick: function() {
    this.props.handleClick(this.props.idx);
  },

  render: function() {
    var community = this.props.community;
    var popularity = this.props.popularity;
    var boxSize;
    if (this.props.idx === this.props.clickedTile) {
      boxSize = "huge-box";
    } else if (community.popularity <= TileConstants.SMALL_BOX) {
      boxSize = "small-box";
    } else if (community.popularity <= TileConstants.MEDIUM_BOX) {
      boxSize = "medium-box";
    } else {
      boxSize = "large-box";
    }

    return (
      <div
        className={"community-tile-container " + "tile-" +this.props.idx + " " + boxSize}
        key={community.id}
        onClick={this.receiveClick}>
        <div className="community-tile">
          <div className="community-name">{community.name}</div>
          <div className="community-description">{community.description}</div>
          <div>{community.popularity}</div>
        </div>
      </div>
    );
  }
});
