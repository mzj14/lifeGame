var timer = new Timer(100, 1);

describe('Timer Object Type', function(){
  describe('Timer.prototype.constructor', function(){
    it('should be a function', function(){
      assert.isFunction(timer.constructor);
    });
    it('should have 2 arguments', function(){
      assert.equal(timer.constructor.length, 2);
    });
  });
  
  describe('Timer.prototype.runGame', function(){
    it('should be a function', function(){
      assert.isFunction(timer.runGame);
    });
    it('should have 3 arguments', function(){
      assert.equal(timer.runGame.length, 3);
    });
  });
  
  describe('Timer.prototype.stopGame', function(){
    it('should be a function', function(){
      assert.isFunction(timer.stopGame);
    });
    it('should have no argument', function(){
      assert.equal(timer.stopGame.length, 0);
    });
  });
});