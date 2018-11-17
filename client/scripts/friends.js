var Friends = {
  initialize: function() {
    $('.username').on('click', function() {
      Friends.toggleStatus($(this).text());
    });
  },
  friends: [],
  toggleStatus: function(username) {
    this.friends.push(username);
  },

};