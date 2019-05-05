function Game() {
  this.frames = [];
}

Game.prototype.rollFrame = function(pins1, pins2 = 0) {
  this.frames.push([pins1, pins2]);
};

Game.prototype.score = function() {
  var totalScore = 0;

  for (var frameIndex = 0; frameIndex < this.frames.length; frameIndex++)
    if (
      this.frames[frameIndex][0] + this.frames[frameIndex][1] === 10 &&
      this.frames[frameIndex + 1]
    ) {
      totalScore +=
        this.frames[frameIndex][0] +
        this.frames[frameIndex][1] +
        this.frames[frameIndex + 1][0];
    } else if (this.frames[frameIndex]) {
      totalScore += this.frames[frameIndex][0] + this.frames[frameIndex][1];
    }
  return totalScore;
};

//
//     console.log(rollIndex);
//     if (isSpare()) {
//       totalScore += getSpareScore();
//       rollIndex += 2;
//     } else if (isStrike()) {
//       totalScore += getStrikeScore();
//       rollIndex += 1;
//     } else {
//       totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
//       rollIndex += 2;
//     }
//   }
//   return totalScore;
//
//   function isSpare() {
//     return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
//   }
//
//   function isStrike() {
//     return game.rolls[rollIndex] == 10;
//   }
//
//   function getSpareScore() {
//     return (
//       game.rolls[rollIndex] +
//       game.rolls[rollIndex + 1] +
//       game.rolls[rollIndex + 2]
//     );
//   }
//
//   function getStrikeScore() {
//     return (
//       game.rolls[rollIndex] +
//       game.rolls[rollIndex + 1] +
//       game.rolls[rollIndex + 2]
//     );
//   }
// };
