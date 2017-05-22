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

// Dummy Content
var tops = ['Баланс близок к минусу', 'Пополните баланс'];
var news = ['Ваш баланс равен 9,5 рубля, <br>рекомендуем вам пополнить<br>ваш баланс.', 'Баланс менее 10ти рублей, <br>рекомендуем вам пополнить<br>ваш баланс.'];
 
// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        // Random image
        var picURL = 'http://orionnet.ru/img/logo.png';
        // Random top
        var top = tops[Math.floor(Math.random() * tops.length)];
        // Random news
        var bot = news[Math.floor(Math.random() * news.length)];
        // List item html
        var itemHTML = '<li class="item-content">' +
                          '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                          '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                              '<div class="item-title">' + top + '</div>' +
                            '</div>' +
                            '<div class="item-subtitle">' + bot + '</div>' +
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