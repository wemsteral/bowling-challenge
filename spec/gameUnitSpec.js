"use strict";

describe("game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe("roll", function() {
    it("pushes pins to rolls array", function() {
      game.roll(1);
      game.roll(2);
      game.roll(3);
      expect(game.rolls).toEqual([1, 2, 3]);
    });
  });

  describe("score", function() {
    it("");
  });
});
