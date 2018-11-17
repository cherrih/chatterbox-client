var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: _.template(`
        <option value="roomname"><%= room %></option>
    `),

  renderRoom: function(rooms) {
    _.each(rooms, function(room) {
      RoomsView.$select.prepend(RoomsView.render({room}));
    });
  }

};
