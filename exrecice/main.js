function Stopwatch() {
  let duration = 0;
  let isRunning;
  let startTime;
  let endTime;

  this.start = function () {
    if (isRunning) throw new Error('Your Stopwatch is Already Running!');

    isRunning = true;

    startTime = Date.now();
  };

  this.stop = function () {
    if (!isRunning) throw new Error('Your Stopwatch is Already Stoped!');
    isRunning = false;
    endTime = Date.now();
    const runTime = (endTime - startTime) / 1000;
    duration += runTime;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    isRunning = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}

let sw = new Stopwatch();
