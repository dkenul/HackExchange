var MembershipApiUtil = {
  createMembership: function(membership) {
    $.ajax({
      url: 'api/memberships',
      type: 'POST',
      dataType: 'json',
      data: {membership: membership},
      success: function (membership) {
        CurrentUserActions.joinCommunity(membership.community);
      }
    });
  }

};
