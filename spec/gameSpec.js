"use strict";

describe("game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it("can roll a game of zeros", function() {
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  });

  it("can roll all ones", function() {
    rollMany(1, 20);
    expect(game.score()).toBe(20);
  });

  it("can roll a spare", function() {
    game.roll(3);
    game.roll(7);
    game.roll(5);
    rollMany(0, 17);
    expect(game.score()).toBe(20);
  });

  it("can roll a strike", function() {
    game.roll(10);
    game.roll(2);
    game.roll(5);
    rollMany(0, 17);
    expect(game.score()).toBe(24);
  });

  it("can roll a perfect game", function() {
    rollMany(10, 20);
    expect(game.score()).toBe(300);
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };
});
