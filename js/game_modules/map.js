/* Definition of Map Object */

/*
  Function: initialize the cell map.
  Arguments: rows -> the row number of the map;
             cols -> the column number of the map;
             lifePropability -> the probability of each ordinate to have alive cell, between [0..1]
*/

function Map(rows, cols, lifePropability){
  var _this = this;
      i = 0,
      j = 0;
  this.cols = cols;
  this.rows = rows;
  console.log(this);
  this.cellMap = new Array(rows);
  for (i = 0; i < rows; i++){
    this.cellMap[i] = Array.apply(null, Array(cols));
    this.cellMap[i].forEach(function(ele, index, array){
      array[index] = _this.setInitialState(lifePropability);
    });
  }
}

/*
  Function: return a random life state of a cell according to the profitability
  Arguments: lifePropability -> the probability of each ordinate to have alive cell
  Return: true[the cell is alive] or false[the cell is dead]
*/  

Map.prototype.setInitialState = function(lifePropability){  
  var targetNum = lifePropability * 10;
  // generate a random number from integers in [0..9]
  var randomNum = Math.floor(Math.random() * 10);
  // console.log(randomNum < targetNum);
  return (randomNum < targetNum);
};

/*
  Function: return the current life state of a cell in (rowOrder, colOrder)
  Arguments: rowOrder -> the order of the row in map
             colOrder -> the order of the col in map
  Return: true[the cell is alive] or false[the cell is dead]
*/

Map.prototype.hasLife = function(rowOrder, colOrder){
  var realRowOrder = rowOrder,
      realColOrder = colOrder;
  if (realRowOrder < 0){
    realRowOrder = this.rows - 1;
  }
  if (realRowOrder === this.rows){
    realRowOrder = 0;
  }
  if (realColOrder < 0){
    realColOrder = this.cols - 1;
  }
  if (realColOrder === this.cols){
    realColOrder = 0;
  }
  return this.cellMap[realRowOrder][realColOrder]
};

