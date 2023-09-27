import React from 'react'
import './MatrixDiagram.css'
import { generateMatrix } from "./TrafficMatrix.js";
import { StringMatrix, VolumeMatrix } from "./StringMatrix.js";
let matrixData;
let count = 0;
let verticalnum = 0, horizontalnum = 0;
let start = 0, end = 1;
const MatrixDiagram = () => {
  const renderMatrix = () => {
    return (
      <div>
        {
          matrixData.map((row, rowIndex) => (
            <div key={rowIndex} className="matrix-row">
              {row.map((value, colIndex) => (
                <div key={colIndex} className="matrix-cell">
                  <div
                    className="traffic-square"
                    style={{ width: `${value}px`, height: `${value}px` }}
                  />
                </div>
              ))}
            </div>
          ))
        }
      </div >
    )
  }
  const renderHorizontalRectangle = (linedata) => {
    let len = 0;
    if ( matrixData.length !== 0 && matrixData[0].length !== 0) {
      for (let i = 0; i < matrixData[0].length; i++) {
        len += matrixData[linedata][i] / 2 + 4;
      }
    }
    return (
      <div className="rectangle" style={{ width: "25px", height: `${len}px` }}>{String.fromCharCode("A".charCodeAt(0) + linedata)}</div>
    )
  }
  const renderVerticalRectangle = (linedata) => {
    let len = 0;
    if ( matrixData.length !== 0 && matrixData[0].length !== 0) {
      for (let i = 0; i < matrixData[0].length; i++) {
        len += matrixData[linedata][i] / 2 + 4;
      }
    }
    return (
      <div className="rectangle" style={{ width: `${len}px`, height: "25px" }}>{String.fromCharCode("A".charCodeAt(0) + linedata)}</div>
    )
  }
  const render = () => {
    const rows = Math.random() * 5 + 1, cols = Math.random() * 5 + 1;
    matrixData = generateMatrix(rows, cols);
    count++;
    const rectangles = [];
    if(count % 2 !== 0){
      for (let i = 0; i < matrixData.length; i++) {
        rectangles.push(renderVerticalRectangle(i));
      }
      verticalnum = cols;
    }
    else {
      for (let i = 0; i < matrixData.length; i++) {
        rectangles.push(renderHorizontalRectangle(i));
      }
      horizontalnum = rows;
    }
    return rectangles;
  }
  const renderHorizontalNode = () => {
    return (
      <div>
        <div style={{ height: "30px" }}></div>
        <div className="container" style={{ display: "flex", flexDirection: "column" ,alignItems: "center", transform: 'translateY(-20px)' }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", transform: 'translateY(-20px)' }}>
            <text>step{count}</text>
            {render()}
          </div>
          {/* <div style={{ width: "10px" }}></div> */}
          <div className="matrix-container">
            {renderMatrix()}
          </div>
        </div>
      </div>
    )
  }
  const renderVerticalNode = () => {
    return (
      <div>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: 'translateY(-20px)' }}>
            <text>step{start}</text>
            {render()}
          </div>
          <div style={{ width: "10px" }}></div>
          <div className="matrix-container">
            {renderMatrix()}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="box">
      {renderVerticalNode()}
      {renderHorizontalNode()}
    </div>

  )
}

export default MatrixDiagram