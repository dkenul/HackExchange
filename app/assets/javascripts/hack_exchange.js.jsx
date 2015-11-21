$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      // CommunityStore.meta();
      return { currentCommunity: "meta" };
    },

    updateCurrentCommunity: function(communityId) {
      var community = communityId;
      this.setState({ currentCommunity: community});
    },

    renderChildren: function() {
      return React.Children.map(this.props.children, function(child) {

        return React.addons.cloneWithProps(child, {

          updateCurrentCommunity: this.updateCurrentCommunity
        });
      }.bind(this));
    },

    render: function(){
      var modifiedChildren = this.renderChildren();

      return (
          <div key={this.state.currentCommunity}>
            <NavBar />
            <Header currentCommunity={this.state.currentCommunity} />
            <div className="content-container">
              <div className="content-wrap group">
                {modifiedChildren}
                </div>
            </div>
            <Footer />
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" components={App}>
        <IndexRoute component={PseudoHome} />
        <Route path="communities" component={CommunityIndex} />
        <Route path="communities/:community_id" component={CommunityShow} />
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
