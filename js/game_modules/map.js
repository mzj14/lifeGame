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

// Within each gird set 'true' for life or 'false' for death according to the lifePropability.  
Map.prototype.setInitialState = function(lifePropability){  
  var targetNum = lifePropability * 10;
  // generate a random number from integers in [0..10]
  var randomNum = Math.floor(Math.random() * 10);
  // console.log(randomNum < targetNum);
  return (randomNum < targetNum);
};

// find out if map[rowOrder, colOrder] had life or not
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

