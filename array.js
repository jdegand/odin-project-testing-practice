const analyze = {
  average: (array) => {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  },
  min : (array) => {
    return Math.min(...array);
  },
  max: (array) => {
    return Math.max(...array);
  },
  length: (array) => {
    return array.length;
  }
}

module.exports = analyze;
