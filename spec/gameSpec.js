"use strict";

describe("game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it("can roll a game of zeros", function() {
    rollMany(0, 0, 10);
    expect(game.score()).toBe(0);
  });

  it("can roll a game of 1s", function() {
    rollMany(1, 1, 10);
    expect(game.score()).toBe(20);
  });

  it("can roll a spare", function() {
    game.rollFrame(5, 5);
    game.rollFrame(3, 2);
    expect(game.score()).toBe(18);
  });

  it("can roll a strike", function() {
    game.rollFrame(10);
    game.rollFrame(5, 3);
    expect(game.score()).toBe(26);
  });

  var rollMany = function(pins1, pins2, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.rollFrame(pins1, pins2);
    }
  };
});
