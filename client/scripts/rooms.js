var Rooms = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  selected: 'SnackReactorHQ',

  rooms: {},
  isSelected: function(roomname) {
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'SnackReactorHQ';
  },

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