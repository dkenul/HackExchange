(function(root){

  var _communities = [];
  var CHANGE_EVENT = 'change';
  root.CommunityStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _communities.slice(0);
    },

    resetCommunities: function(community) {
      _communities = communities;
    },

    resetCommunity: function(community) {
      var switched = false;
      _communities.forEach(function(c) {
        if (c.id === community.id) {
          _communities[_communities.indexOf(c)] = community;
          switched = true;
        }
      });
      if (!switched) {_communities.push(community);}
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case CommunityConstants.COMMUNITIES_RECEIVED:
          CommunityStore.resetCommunities(payload.communities);
          CommunityStore.emit(CHANGE_EVENT);
          break;
        case CommunityConstants.COMMUNITY_RECEIVED:
          CommunityStore.resetCommunity(payload.community);
          CommunityStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
