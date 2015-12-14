$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return {
        currentCommunity: "meta",
        currentUser: CurrentUserStore.currentUser(),
        navReset: false
      };
    },

    componentDidMount: function() {
      CurrentUserStore.addChangeListener(this._onUserChange);
    },

    componentWillUnmount: function() {
      CurrentUserStore.removeChangeListener(this._onUserChange);
    },

    _onUserChange: function() {
      this.setState({currentUser: CurrentUserStore.currentUser()});
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

    navReset: function() {
      this.setState({navReset: true});
    },

    renderChildren: function () {
      return React.Children.map(this.props.children, function (child) {
        return React.addons.cloneWithProps(child, {
          currentUser: this.state.currentUser
        });
      }.bind(this));
    },

    render: function(){

      return (
          <div onClick={this.navReset}>
            <NavBar communityId={this.state.currentCommunity} key={this.state.currentCommunity} navReset={this.state.navReset} currentUser={this.state.currentUser}/>
            <Header communityId={this.state.currentCommunity} />
            <div className="content-container">
              <div className="content-wrap group">
                {this.renderChildren()}
              </div>
            </div>
            <Footer />
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="communities" component={CommunityIndex} />
        <Route path="communities/:community_id" component={CommunityShow}/>
        <Route path="communities/:community_id/questions/:question_id" component={QuestionShow} />
        <Route path="users/:user_id" component={userShow} />
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
