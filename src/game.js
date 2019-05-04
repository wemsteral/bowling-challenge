function Game() {
  this.rolls = [];
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  var totalScore = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpare()) {
      totalScore += getSpareScore();
      rollIndex += 2;
    } else if (isStrike()) {
      totalScore += getStrikeScore();
      rollIndex += 1;
    } else {
      totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2;
    }
  }
  return totalScore;

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  }

  function getSpareScore() {
    return (
      game.rolls[rollIndex] +
      game.rolls[rollIndex + 1] +
      game.rolls[rollIndex + 2]
    );
  }

  function getStrikeScore() {
    return (
      game.rolls[rollIndex] +
      game.rolls[rollIndex + 1] +
      game.rolls[rollIndex + 2]
    );
  }
};
