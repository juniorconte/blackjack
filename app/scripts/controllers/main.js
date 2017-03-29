'use strict';

/**
 * @ngdoc function
 * @name blackjackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackjackApp
 */
angular.module('blackjackApp')
  .controller('MainCtrl', function () {

    var main = this;

    main.deck = [
      {
        suit: 'spades',
        ranks: [1,2,3,4,5,6,7,8,9,10,11,12,13]
      },
      {
        suit: 'clubs',
        ranks: [1,2,3,4,5,6,7,8,9,10,11,12,13]
      },
      {
        suit: 'hearts',
        ranks: [1,2,3,4,5,6,7,8,9,10,11,12,13]
      },
      {
        suit: 'diamonds',
        ranks: [1,2,3,4,5,6,7,8,9,10,11,12,13]
      }
    ];

  });
