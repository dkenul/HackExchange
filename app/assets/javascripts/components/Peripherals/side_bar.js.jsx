var SideBar = React.createClass ({

  render: function() {

    return (
      <div className="meta-sidebar">
        <h2>Featured</h2>
        <div className="featured-community">
          <h3>Chemistry</h3>
          <p>Cool stuff about Chemistry!</p>
        </div>
        <h2>Top Users</h2>
        <ul className="top-users">
          <li>User0</li>
          <li>User1</li>
          <li>User2</li>
        </ul>
        <h2>Hot Communities</h2>
        <ul className="hot-communities">
          <li>Lolcode</li>
          <li>Physics</li>
          <li>React</li>
        </ul>
      </div>
    );
  }
});
