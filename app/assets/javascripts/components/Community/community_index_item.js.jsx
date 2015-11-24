var CommunityIndexItem = React.createClass ({

  componentDidMount: function() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 80,
      gutterWidth: 10,
      isAnimated: true
    });
  },

  componentWillReceiveProps: function() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 80,
      gutterWidth: 10,
      isAnimated: true
    });
  },

  receiveClick: function() {
    this.props.handleClick(this.props.idx);
  },

  render: function() {
    var community = this.props.community;
    var popularity = this.props.popularity;
    var boxSize;
    var description;
    if (this.props.idx === this.props.clickedTile) {
      boxSize = "huge-box";
    } else if (community.popularity <= TileConstants.SMALL_BOX) {
      boxSize = "small-box";
    } else if (community.popularity <= TileConstants.MEDIUM_BOX) {
      boxSize = "medium-box";
    } else {
      boxSize = "large-box";
    }

    if (boxSize === "huge-box") {
      description = <div className="community-description">{community.description}</div>;
    }


    return (
      <div
        className={"grid-item " + "grid-item--" + boxSize}
        onClick={this.receiveClick}>
        <div className="community-tile">
          <div className="community-name">{community.name}</div>
          {description}
        </div>
      </div>
    );
  }
});
