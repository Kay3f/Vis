
function generateMatrix(rows, cols) {
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            if (Math.random() < 0.5) {
                row.push(0);
            } else {
                row.push(Math.floor(Math.random() * 21));
            }
        }
        matrix.push(row);
    }
    for (var i = 0; i < rows; i++) {
        matrix[i][cols - 1] = 0;
    }
    return matrix;
}

export { generateMatrix };
