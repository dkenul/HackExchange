var PseudoHome = React.createClass ({
  mixins: [ReactRouter.History],

  handleClick: function(event) {
    this.history.pushState(null, "/communities");
  },

  render: function () {
    return(
      <div>
        <p>HELLO FROM CONTENT</p>
        <br/>
        <p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p><p>The cake is a lie!</p>
      </div>
    );
  }
});
