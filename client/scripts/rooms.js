var Rooms = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  
  initialize: function() {
    $('#rooms button').on('click', function() {
      Rooms.add($(this).text());    
    });
  },
  //rooms: [],
  add: function(roomname) {    
    RoomsView.render(roomname);
  },

};