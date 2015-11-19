$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    render: function(){
      return (
          <div>
            <NavBar />
            <Header />
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
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
