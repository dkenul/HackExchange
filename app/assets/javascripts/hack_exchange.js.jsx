$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return { currentCommunity: "meta" };
    },

    updateCurrentCommunity: function(communityId) {
      var community = communityId;
      this.setState({ currentCommunity: community});
    },

    componentWillReceiveProps: function(nextProps) {
      if (nextProps.params.community_id) {
        this.setState({currentCommunity: nextProps.params.community_id});
      } else {
        this.setState({currentCommunity: "meta"});
      }
    },

    render: function(){

      return (
          <div>
            <NavBar key={this.state.currentCommunity}/>
            <Header communityId={this.state.currentCommunity} />
            <div className="content-container">
              <div className="content-wrap group">
                {this.props.children}
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
        <Route path=":community_name/:community_id" component={CommunityShow} />

      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
