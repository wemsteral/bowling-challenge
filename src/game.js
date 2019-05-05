function Game() {
  this.frames = [];
}

Game.prototype.rollFrame = function(pins1, pins2 = 0) {
  this.frames.push([pins1, pins2]);
};

Game.prototype.score = function() {
  var totalScore = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < this.frames.length; frameIndex++)
    if (isSpare()) {
      totalScore +=
        this.frames[frameIndex][0] +
        this.frames[frameIndex][1] +
        this.frames[frameIndex + 1][0];
    } else if (
      this.frames[frameIndex][0] === 10 &&
      this.frames[frameIndex + 1] &&
      this.frames.length > 2
    ) {
      console.log("here");
      console.log(this.frames);
      if (
        this.frames[frameIndex + 2] &&
        (this.frames[frameIndex + 1][0] === 10 &&
          this.frames[frameIndex + 2][0] === 10)
      ) {
        totalScore +=
          this.frames[frameIndex][0] +
          this.frames[frameIndex + 1][0] +
          this.frames[frameIndex + 2][0];
      } else {
        console.log("here2");
        totalScore +=
          this.frames[frameIndex][0] +
          this.frames[frameIndex + 1][0] +
          this.frames[frameIndex + 1][1];
        console.log(this.frames[frameIndex]);
        console.log(this.frames[frameIndex + 1]);
      }
    } else {
      totalScore += this.frames[frameIndex][0] + this.frames[frameIndex][1];
    }
  return totalScore;

  function isSpare() {
    return (
      game.frames[frameIndex][0] !== 10 &&
      (game.frames[frameIndex][0] + game.frames[frameIndex][1] === 10 &&
        game.frames[frameIndex + 1])
    );
  }
};
