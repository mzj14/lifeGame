/* Definition of UI Object */

/*
  Function: custruct a ui object with some settings 
  Arguments: canvas -> the <canvas> document element
             lineColor -> string that represents the line color when painting
             liveColor -> string that represents the alive cell color when painting
             deathColor -> string that represents the dead cell color when painting
*/

function UI(canvas, lineColor, liveColor, deathColor){
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.ctx.strokeStyle = lineColor;
  this.liveColor = liveColor;
  this.deathColor = deathColor;
};

/*
  Function: drawing grid system on canvas 
  Arguments: rows -> the row number of the grid system
             cols -> the col number of the grid system
*/

UI.prototype.outputFrame = function(rows, cols){
  var cellWidth = this.canvas.width / cols,
      cellHeight = this.canvas.height / rows,
      dis = 0;
  
  for (dis = 0; dis <= this.canvas.height; dis += cellHeight){
    this.ctx.moveTo(0, dis);
    this.ctx.lineTo(this.canvas.width, dis);
    this.ctx.stroke();
  }
  
  for (dis = 0; dis <= this.canvas.width; dis += cellWidth){
    this.ctx.moveTo(dis, 0);
    this.ctx.lineTo(dis, this.canvas.height);
    this.ctx.stroke();
  }
};

/*
  Function: drawing a cell whose ordinate is (rowOrder, colOrder) on canvas 
  Arguments: rowOrder -> the row order of the ordinate
             colOrder -> the col order of the ordinate
             cellWidth -> the width of a cell in px
             cellHeight -> the height of a cell in px
             alive -> true or false, represents the live or death
*/

UI.prototype.outputCell = function(rowOrder, colOrder, cellWidth, cellHeight, alive){
  if (alive){
    this.ctx.fillStyle = this.liveColor;
  } else {
    this.ctx.fillStyle = this.deathColor;
  }
  
  this.ctx.fillRect(colOrder * cellWidth, rowOrder * cellHeight, cellWidth, cellHeight);
}

/*
  Function: drawing a cell map on canvas 
  Arguments: cellMap -> two-dimension array, representing the cell map
*/

UI.prototype.outputMap = function(cellMap){
  var _this = this,
      i = 0,
      cellHeight = this.canvas.height / cellMap.length,
      cellWidth = this.canvas.width / cellMap[0].length;
  
  for (i = 0; i < cellMap.length; i++){
    cellMap[i].forEach(function(ele, index){
      _this.outputCell(i, index, cellWidth, cellHeight, ele);
    });
  }
};

