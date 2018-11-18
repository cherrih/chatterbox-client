var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    // RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();
    Rooms.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      if (!data.results || !data.results.length) { return; }
      var messages = data.results;
      _.each(messages, function(elem) {
        MessagesView.renderMessage(elem);
        if(elem.roomname !== '' && elem.roomname !== 'undefined') {
          Rooms.rooms[elem.roomname] = elem.roomname;   
        }
      });
      RoomsView.renderRoom(Rooms.rooms);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
