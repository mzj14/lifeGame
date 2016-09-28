// timerLength and timeUnit are in seconds.
function Timer(timeLength, timeUnit){
  this.timeLength = Math.floor(timeLength / timeUnit);
  this.timeUnit = timeUnit;
  this.timerID = undefined;
}

// map is a Map object, rule is a Rule object
Timer.prototype.runGame = function(map, rules, ui){
  var _this = this;
  ui.outputMap(map.cellMap);
  ui.outputFrame(map.rows, map.cols);
  console.log(this.timeLength);
  var passTime = 0;
  this.timerID = setInterval(function(){
    passTime++; 
    console.log(passTime);
    // Stop refresh the map if time is over
    if (passTime >= _this.timeLength){
      _this.stopGame();
    }
    else{
      rules.generateNextCellMap(map);
      console.log(map.cellMap[0]);
      ui.outputMap(map.cellMap);
      ui.outputFrame(map.rows, map.cols);
    }
  }, this.timeUnit * 1000);
}

Timer.prototype.stopGame = function(){
  clearInterval(this.timerID);
}