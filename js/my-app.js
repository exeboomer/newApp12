// Initialize your app
var myApp = new Framework7({
    swipePanel: 'left'
});
// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

// Dummy Content
var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
 
// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        // Random image
        var picURL = 'https://dummyimage.com/44/000/fff' + Math.round(Math.random() * 100);
        // Random song
        var song = songs[Math.floor(Math.random() * songs.length)];
        // Random author
        var author = authors[Math.floor(Math.random() * authors.length)];
        // List item html
        var itemHTML = '<li class="item-content">' +
                          '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                          '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                              '<div class="item-title">' + song + '</div>' +
                            '</div>' +
                            '<div class="item-subtitle">' + author + '</div>' +
                          '</div>' +
                        '</li>';
        // Prepend new list element
        ptrContent.find('ul').prepend(itemHTML);
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});

var mainView = myApp.addView('.view-main');
 
myApp.onPageInit('login-screen', function (page) {
  var pageContainer = $$(page.container);
  pageContainer.find('.list-button').on('click', function () {
    var username = pageContainer.find('input[name="username"]').val();
    var password = pageContainer.find('input[name="password"]').val();
    // Handle username and password
    myApp.alert('Username: ' + username + ', Password: ' + password, function () {
      mainView.goBack();
    });
  });
});     