var CommunityIndexItem = React.createClass ({

  componentDidMount: function() {
    $('.grid').isotope({
      layoutMode: 'packery',
      itemSelector: '.grid-item',
      packery: {
        gutter: 10
      },
      isAnimated: true
    });
  },

  componentWillUpdate: function() {
    $('.grid').isotope({
      layoutMode: 'packery',
      itemSelector: '.grid-item',
      packery: {
        gutter: 10
      },
      isAnimated: true
    });
  },

  // shouldComponentUpdate: function() {
  //   return false;
  // },

  receiveClick: function() {
    this.props.handleClick(this.props.idx);
  },

  render: function() {
    var community = this.props.community;
    var popularity = this.props.popularity;
    var boxSize;
    var description;
    var link;
    var fullTile;
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
      link = <a
        href={"#/communities/" + community.id}
        className="community-link">Visit Community</a>;

      fullTile =
        <div className="community-tile">
          <div className="group">
            <img
              className="community-logo expanded"
              src={window.images[community.name] ? window.images[community.name] : window.images.Default}
            />
            <div className="community-name expanded">{community.name}</div>
          </div>
          {description}
          {link}
        </div>;
    } else {
      fullTile =
        <div className="community-tile">
          <div className="community-name">{community.name}</div>
          <img
            className="community-logo"
            src={window.images[community.name] ? window.images[community.name] : window.images.Default}
          />
        </div>;
    }


    return (
      <div
        className={"grid-item " + "grid-item--" + boxSize}
        onClick={this.receiveClick}>
        {fullTile}
      </div>
    );
  }
});
