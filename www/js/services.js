angular.module('App.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Currencies', function(){
      return [
      { code: 'AUD', text: 'Australian Dollar', selected: true },
      { code: 'BRL', text: 'Brazilian Real', selected: false },
      { code: 'CAD', text: 'Canadian Dollar', selected: true },
      { code: 'CHF', text: 'Swiss Franc', selected: false },
      { code: 'CNY', text: 'Chinese Yuan', selected: true},
      { code: 'EUR', text: 'Euro', selected: true },
      { code: 'GBP', text: 'British Pound Sterling', selected: true },
      { code: 'IDR', text: 'Indonesian Rupiah', selected: false },
      { code: 'ILS', text: 'Israeli New Sheqel', selected: false },
      { code: 'MXN', text: 'Mexican Peso', selected: true },
      { code: 'NOK', text: 'Norwegian Krone', selected: false },
      { code: 'NZD', text: 'New Zealand Dollar', selected: false },
      { code: 'PLN', text: 'Polish Zloty', selected: false },
      { code: 'RON', text: 'Romanian Leu', selected: false },
      { code: 'RUB', text: 'Russian Ruble', selected: true },
      { code: 'SEK', text: 'Swedish Krona', selected: false },
      { code: 'SGD', text: 'Singapore Dollar', selected: false },
      { code: 'USD', text: 'United States Dollar', selected: true },
      { code: 'ZAR', text: 'South African Rand', selected: false }
      ];

});

