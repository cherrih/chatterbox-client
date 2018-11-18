var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: _.template(`
      <div class="chat">
        <div class="username" id="${this.username}"><%- username %></div>
        <div class="text"><%- text %></div>
      </div>
    `),
  
  renderMessage: function(message) {
    if (message.username && message.text){
      this.$chats.prepend(this.render(message));
    }
  },

};