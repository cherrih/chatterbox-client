var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: _.template(`
      <div class="chat">
        <div class="roomname"></div>
      </div>
    `),

  renderRoom: function(room) {
    this.$select.prepend(this.render(message));
  }

};
