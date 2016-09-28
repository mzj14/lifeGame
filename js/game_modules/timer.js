/* Definition of Timer Object */

/*
  Function: set game total time(in second) and cell evolution period(in second)
  Arguments: timeLength -> game total time(in second)
             timeUnit -> cell evolution period(in second)
*/

function Timer(timeLength, timeUnit){
  this.timeLength = Math.floor(timeLength / timeUnit);
  this.timeUnit = timeUnit;
  this.timerID = undefined;
}

/*
  Function: run game with the help of map, rules and ui
  Arguments: map -> map object
             rules -> rules object
             ui -> ui object
*/

Timer.prototype.runGame = function(map, rules, ui){
  var _this = this;
  ui.outputMap(map.cellMap);
  ui.outputFrame(map.rows, map.cols);
  var passTime = 0;
  this.timerID = setInterval(function(){
    passTime++; 
    // Stop refresh the map if time is over
    if (passTime >= _this.timeLength){
      _this.stopGame();
    }
    else{
      rules.generateNextCellMap(map);
      ui.outputMap(map.cellMap);
      ui.outputFrame(map.rows, map.cols);
    }
  }, this.timeUnit * 1000);
}

/* 
  Function: clear timer to stop game;
*/  

Timer.prototype.stopGame = function(){
  clearInterval(this.timerID);
}