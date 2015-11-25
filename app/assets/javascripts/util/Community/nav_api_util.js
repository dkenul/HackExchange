window.NavApiUtil = {
  fetchCommunities: function(){

    $.ajax({
      url: 'api/communities',
      type: 'GET',
      dataType: 'json',
      success: function(communities) {
        NavActions.receiveAll(communities);
      }
    });
  },
};
