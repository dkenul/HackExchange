var SideBar = React.createClass ({

  render: function() {

    return (
      <div className="meta-sidebar">
        <h2>Featured</h2>
        <div className="featured-community">
          <h3><a href="/#/communities/8">Chemistry</a></h3>
          <p>Cool stuff about Chemistry!</p>
        </div>
        <h2>Top Users</h2>
        <ul className="top-users">
          <li>Damon</li>
          <li>Spambot20</li>
          <li>VaultDweller7</li>
        </ul>
        <h2>Hot Communities</h2>
        <ul className="hot-communities">
          <li>Lolcode</li>
          <li>Physics</li>
          <li>ReactJs</li>
        </ul>
      </div>
    );
  }
});
