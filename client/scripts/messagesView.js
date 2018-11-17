var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="text"><%= text %></div>
        <div class="roomname"><%= roomname %></div>
      </div>
    `),
  
  renderMessage: function(message) {
    this.$chats.prepend(this.render(message));
  },

};