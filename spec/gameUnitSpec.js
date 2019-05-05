"use strict";

describe("game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe("rollFrame", function() {
    it("pushes completed frame to frames array", function() {
      game.rollFrame(1, 1);
      expect(game.frames).toEqual([[1, 1]]);
    });
  });
});
