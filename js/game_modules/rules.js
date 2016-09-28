/* Definition of Map Object */

/*
  Function: set surrounding alive cell number with which the center cell could become alive or dead.
  Arguments: lifeNumberRange -> surrounding alive cell number with which the center cell could become alive
             deathNumberRange -> surrounding alive cell number with which the center cell could become dead
*/

function Rules(lifeNumRange, remainNumRange){
  this.lifeNumRange = lifeNumRange;
  this.remainNumRange = remainNumRange;
}

/*
  Function: return surrounding alive cell number
  Arguments: map -> the map object which stores the cellmap
             rowOrder -> the order of the row in cellmap
             colOrder -> the order of the col in cellmap
  Return: lifeNum -> the surrounding alive cell number, an integer between [0..8]           
*/

Rules.prototype.getNeighborLifeNum = function(map, rowOrd, colOrd){
  // console.log('h5');
  var lifeNum = 0,
      k = 0,
      l = 0;
  for (k = rowOrd - 1; k <= rowOrd + 1; k++)
  for (l = colOrd - 1; l <= colOrd + 1; l++){
    lifeNum += Number(map.hasLife(k, l));
    // console.log('h6');
  }

  lifeNum -= Number(map.hasLife(rowOrd, colOrd));
  return lifeNum;
}

/*
  Function: return the cell next state based on the surrounding currently alive cell number
  Arguments: currentCellState -> true or false, related to death or life
             neighborLifeNum -> the surrounding currently alive cell number, between [0..8]
  Return: the cell next state[true or false]           
*/

Rules.prototype.judgeNextCellStateByLifeNum = function(currentCellState, neighborLifeNum){
  if (this.lifeNumRange.indexOf(neighborLifeNum) !== -1){
    return true;
  }
  if (this.remainNumRange.indexOf(neighborLifeNum) !== -1){
    return currentCellState;  
  }
  return false;
}

/*
  Function: return the next state of the cell which located in (rowOrd, colOrd)
  Arguments: map -> the map object which stores the cellmap
             rowOrder -> the order of the row in cellmap
             colOrder -> the order of the col in cellmap
  Return: the cell next state[true or false]           
*/

Rules.prototype.getNextCellState = function(map, rowOrd, colOrd){
  // console.log('h3');
  var neighborLifeNum = this.getNeighborLifeNum(map, rowOrd, colOrd);
  // console.log('h4');
  return this.judgeNextCellStateByLifeNum(map.cellMap[rowOrd][colOrd], neighborLifeNum);
}

/*
  Function: generate the next map according to current map
  Arguments: map -> the map object which stores the cellmap          
*/

Rules.prototype.generateNextCellMap = function(map){
  var _this = this;
  var nextMap = new Array(map.rows);
  var i = 0, 
      j = 0;
  for (i = 0; i < map.rows; i++){
    nextMap[i] = map.cellMap[i].map(function(ele, index){
      // console.log("h2");
      return _this.getNextCellState(map, i, index);
    });
  }
  // refresh the cellMap
  map.cellMap = nextMap;
}