// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(songs){
    // if (Array.isArray(songs)) {
    //   for (var i = 0; i < songs.length; i++) {
    //     this.push(songs[i]);
    //   }
    // } else {
    //   this.push(songs);
    // }
    this.listenTo(this, 'add', this.playQueue);
    this.on('ended', this.dequeue);
    // this.on('enqueue', this.enqueue);
    this.on('add', this.enqueue);
    this.on('remove', this.dequeue);
  },

  playFirst: function() {
    this.at(0).play();
  },

  playQueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song){
    song = song || this.at(0);
    this.remove(song);
    this.playQueue();
  },

  enqueue: function(song){
    this.add(song);
  }


});
