// this will have the appropriate user_id prop based on the clicked user


var userShow = React.createClass ({

  getInitialState: function() {
    return {user: UsersStore.findUserById(parseInt(this.props.params.user_id))}
  },

  componentDidMount: function() {
    UsersStore.addChangeListener(this._onChange)
    UserApiUtil.fetchSingleUser(this.props.params.user_id)
  },

  componentWillUnmount: function() {
    UsersStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({user: UsersStore.findUserById(parseInt(this.props.params.user_id))});
  },

  render: function() {
    debugger;
    return (
      <div>
        Hey
      </div>
    );
  }

});
