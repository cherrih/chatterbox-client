var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <div class="text"></div>
        <div class="roomname"></div>
      </div>
    `),
  
  renderMessage: function(message) {
    this.$chats.prepend(this.render(message));
  },

};