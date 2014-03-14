describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function(){
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  it('renders when add or remove event fires from the song queue collection', function(){
    sinon.spy(SongQueueView.prototype, 'render');
    expect(view.render).to.have.been.not.called;
    view = new SongQueueView({collection: fakeSongs});
    expect(view.render).to.have.been.not.called;
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    expect(view.render).to.have.been.calledOnce;
    view.collection.pop();
    expect(view.render).to.have.been.calledTwice;
  });

});
