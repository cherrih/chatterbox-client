var Messages = {
  messageBuilder: function() {
    return {
        username: App.username,
        text: $('#message').val(),
        roomname: Rooms.selected,
    }
  }
  
//   {
//     username: null,
//     text: null,
//     roomname: ,
//   },

};