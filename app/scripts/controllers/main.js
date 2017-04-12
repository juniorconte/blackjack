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

    var Table = function() {
      var table = this;

      table.people = {
        players: [],
        add: function(name) {
          var player = new Player(name);

          table.upCardTo(player);
          table.upCardTo(player);

          this.players.push(player);
        }
      };

      table.deck = {
        cards: [],
        add: function(repeat) {
          for (var count = 0; count < (repeat || 1); count++) {
            this.cards = _.union(this.cards, new Cards());
          }

          return this;
        },
        shuffle: function() {
          this.cards = _.shuffle(this.cards);
        }
      };

      table.upCardTo = function(player) {
        if (table.deck.cards.length) {
          player.hand.add(table.deck.cards.shift());
        }
      };
    };

    var Cards = function() {
      var suits = ['spades','hearts','clubs','diamonds'];
      var ranks = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

      return _.chain(suits).map(function(suit) {
        return _.map(ranks, function(rank, index) {
          return {
            suit: suit,
            rank: rank,
            value: index+1 > 10 && 10 || index+1
          };
        });
      })
      .flatten()
      .value();
    };

    var Player = function(name) {
      var player = this;

      player.name = name || null;
      player.hand = new Hand();
    };

    var Hand = function() {
      var hand = this;

      hand.cards = [];

      hand.add = function(card) {
        hand.cards.push(card);
      };

      hand.sum = function() {
        return _.reduce(hand.cards, function(memo, card) {
          return memo + card.value;
        }, 0);
      };

      hand.isBurst = function() {
        return hand.sum() > 21;
      };

      hand.isHit = function() {
        return hand.sum() === 21;
      };

      hand.isBlackJack = function() {
        return hand.cards.length === 2 &&
          hand.sum() === 11 &&
          _.chain(hand.cards)
            .pluck('rank')
            .intersection(['J','Q','K'])
            .value()
            .length > 0;
      };
    };

    var main = this;

    main.table = new Table();

    main.table.deck.add(2).shuffle();

    main.table.people.add('Jogador 1');

  });
