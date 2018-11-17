var Rooms = {
    initialize: function() {
        $('#rooms button').on("click", function() {
            Rooms.add($(this).text());
        })
    },
    rooms: [],
    add: function(roomname) {
        this.rooms.push(roomname);
    },

};