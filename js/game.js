/* The map is 50 * 50 size, the probability for each grid to have alive cell is 0.5 */

/* The cell system will exist for 1000s, the period for the system to evolve is 1s, the evolving rules is stored in Rules.rules */

function gerUserDataObject($settings, gameLengthElement, gameFrequencyElement, lifeProbabilityElement, lifeNumElements, remainNumElements){
  var liveColor = $settings[0]['live-cell-color'].value,
      deadColor = $settings[0]['dead-cell-color'].value,
      lineColor = $settings[0]['grid-line-color'].value,
      gameLength = Number(gameLengthElement.value),
      gameFrequency = Number(gameFrequencyElement.value),
      lifeProbability = Number(lifeProbabilityElement.value),
      lifeNumRange = new Array(),
      remainNumRange = new Array();
  
  lifeNumElements.forEach(function(ele){
    if (ele.checked){
      lifeNumRange.push(Number(ele.value));
    }
  });
  
  remainNumElements.forEach(function(ele){
    if (ele.checked){
      remainNumRange.push(Number(ele.value));
    }
  });
  
  return {
    liveColor: liveColor,
    deadColor: deadColor,
    lineColor: lineColor,
    gameLength: gameLength,
    gameFrequency: gameFrequency,
    lifeProbability: lifeProbability,
    lifeNumRange: lifeNumRange,
    remainNumRange: remainNumRange
  };
}

$(function(){
  const rows = 20,
        cols = 20,
        cellMapElement = $('#cell-map')[0],
        $settings = $("#settings"),
        gameLengthElement = $("#game-length")[0],
        gameFrequencyElement = $("#game-frequency")[0],
        lifeProbabilityElement = $("#life-probability")[0],
        lifeNumElements = document.getElementsByName('life-num'),
        remainNumElements = document.getElementsByName('remain-num');
  
  var map = null,
      rules = null,
      timer = null;
  
  var ui = new UI(cellMapElement, 'black', 'black', 'black');
 
  ui.outputFrame(rows, cols);
  
  $settings.submit(function(){
    event.preventDefault();
    if (timer !== null){
      timer.stopGame();
    }
    userData = gerUserDataObject($settings, gameLengthElement, gameFrequencyElement, lifeProbabilityElement,
                              lifeNumElements, remainNumElements);
    map = new Map(rows, cols, userData.lifeProbability);
    rules = new Rules(userData.lifeNumRange, userData.remainNumRange);
    timer = new Timer(userData.gameLength, userData.gameFrequency);
    ui = new UI(cellMapElement, userData.lineColor, userData.liveColor, userData.deadColor);
    timer.runGame(map, rules, ui);
  });
});
