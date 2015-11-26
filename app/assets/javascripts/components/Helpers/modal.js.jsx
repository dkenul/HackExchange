var Modal = React.createClass ({

  render: function () {

    return (
      <div className="some-modal">
        <form id="openModal" className="modalBackground">
          <div>
            <a className="close">X</a>
            <h2>Create New Community</h2>
            <label>Name
              <input type="text" />
            </label>

            <label>Description
              <textarea></textarea>
            </label>
          </div>
        </form>
      </div>
    );
  }
});
