// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(song){
    this.push(song);
    this.on('play', function() {

    });
  },

  playFirst: function() {
    this.set('currentSong', this.at(0));
  },

  events: {
   'add': 'FirstPlay'
  }


});
