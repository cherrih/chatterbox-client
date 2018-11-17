var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <div class="text"></div>
        <div class="roomname"></div>
      </div>
    `),

    // renderMessage: function(message) {
    //   if (message.username && message.text){
    //     this.$chats.prepend(this.render(message));
    //   }
    // }
};