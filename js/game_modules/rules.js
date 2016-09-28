// TODO: Should it be a deep copy or shallow copy ??
function Rules(lifeNumRange, remainNumRange){
  this.lifeNumRange = lifeNumRange;
  this.remainNumRange = remainNumRange;
}

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

Rules.prototype.judgeNextCellStateByLifeNum = function(currentCellState, neighborLifeNum){
  if (this.lifeNumRange.indexOf(neighborLifeNum) !== -1){
    return true;
  }
  if (this.remainNumRange.indexOf(neighborLifeNum) !== -1){
    return currentCellState;  
  }
  return false;
}

Rules.prototype.getNextCellState = function(map, rowOrd, colOrd){
  // console.log('h3');
  var neighborLifeNum = this.getNeighborLifeNum(map, rowOrd, colOrd);
  // console.log('h4');
  return this.judgeNextCellStateByLifeNum(map.cellMap[rowOrd][colOrd], neighborLifeNum);
}

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