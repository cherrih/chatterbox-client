var Rooms = {
  initialize: function() {
    $('#rooms button').on('click', function() {
      Rooms.add($(this).text());
    // Create a function that on intitialize pulls inital list of messages
    // data.results.forEach(function(elem) {
    //     if(!Rooms.rooms.includes(elem.roomname)) {
    //         Rooms.rooms.push(elem.roomname);
    //     }
    // })
    console.log(Rooms.rooms);
    // iterate through the array of messages
    // Capture the roomname key
    // if unique push to rooms array for initial population
    });
  },
  rooms: [],
  add: function(roomname) {
    
    this.rooms.push(roomname);
  },

};