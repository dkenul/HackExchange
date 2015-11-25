(function(root){

  var _communities = [];
  var CHANGE_EVENT = 'change';
  root.NavStore = $.extend({}, EventEmitter.prototype, {

    all: function(){
      return _communities.slice(0);
    },

    havingId: function(id) {
      for (var i = 0; i < _communities.length; i++) {
        if (_communities[i].id === id) {
          return _communities[i];
        }
      }

      return null;
    },

    resetCommunities: function(communities) {
      _communities = communities;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){

      switch (payload.actionType) {
        case "NAV_COMMUNITIES_RECEIVED":
          NavStore.resetCommunities(payload.communities);
          NavStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
