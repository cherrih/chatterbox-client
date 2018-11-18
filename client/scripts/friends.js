var Friends = {
  initialize: function() {
    $('div.username').on('click', Friends.toggleStatus); 
    
    // function() {
    //   Friends.toggleStatus($(this).text());
    // });
  } ,
  friends: [],
  toggleStatus: function(username) {
    Friends.friends.push(username);
    if (Friends.friends.contains(username))
  },

};