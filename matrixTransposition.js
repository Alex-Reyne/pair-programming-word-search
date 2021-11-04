const transpose = function(matrix) {
  let result = [];
  let tempArray = [];
  
  for (let row = 0; row <= matrix[0].length - 1; row++) {

    for (let column = 0; column <= matrix.length - 1; column++) {
      tempArray.push(matrix[column][row]);
      if (column === matrix.length - 1) {
        result.push(tempArray);
        tempArray = [];
      }
    }
  }
  return result;
};

module.exports = transpose;


// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));