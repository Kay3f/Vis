// 规定StringMatrix长度从长到短
var StringMatrix = [
    ["A", "B", "D", "C"],
    ["C", "A", "A", "D"],
    ["B", "D", "A"],
    // ["C","B","A"]
]
var VolumeMatrix = [
    [40, 70, 50],
    [25, 40, 30],
    [10, 20, 0],
    // [25, 40, 30],
]
// let start = 0, end = 1;
var startline, endline, matrixData;
function HandleString(start, end) {
    for (let i = 0; i < VolumeMatrix.length; i++) {
        startline.push(VolumeMatrix[i][start]);
        endline.push(VolumeMatrix[i][end]);
    }
    for (let i = 0; i < startline.length; i++) {
        for (let j = 0; j <startline.length; j++) {
            if (startline[i] === startline[j]) {
                for (let k = 0; k < matrixData[i].length; k++) {
                    matrixData[i][k] += matrixData[j][k];
                }
                matrixData.splice(j, 1);
            }
        }
    }
    for (let i = 0; i <endline.length; i++) {
        for (let j = 0; j <endline.length; j++) {
            if (endline[i] === endline[j]) {
                for (let k = 0; k < matrixData[i].length; k++) {
                    matrixData[i][k] += matrixData[j][k];
                }
                matrixData.splice(j, 1);
            }
        }
    }
    return [startline, endline, matrixData];
}
export { StringMatrix, VolumeMatrix };
