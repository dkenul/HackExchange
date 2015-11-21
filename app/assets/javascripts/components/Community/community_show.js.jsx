var CommunityShow = React.createClass ({
  mixins: [],

  componentDidMount: function() {
    this.props.updateCurrentCommunity(this.props.params.community_id);
  },

  componentWillReceiveProps: function() {
    // this.props.updateCurrentCommunity(this.props.params.community_id);
  },

  render: function() {
    return (
      <div>
        {this.props.params.community_id}
      </div>
    );
  }
});
