var ui = new UI($('<canvas></canvas>')[0], 'grey', 'white', 'grey');

describe('UI Object Type', function(){
  describe('UI.prototype.constructor', function(){
    it('should be a function', function(){
      assert.isFunction(ui.constructor);
    });
    it('should have 4 arguments', function(){
      assert.equal(ui.constructor.length, 4);
    });
  });
  
  describe('UI.prototype.outputFrame', function(){
    it('should be a function', function(){
      assert.isFunction(ui.outputFrame);
    });
    it('should have 2 arguments', function(){
      assert.equal(ui.outputFrame.length, 2);
    });
  });
  
  describe('UI.prototype.outputCell', function(){
    it('should be a function', function(){
      assert.isFunction(ui.outputCell);
    });
    it('should have 5 arguments', function(){
      assert.equal(ui.outputCell.length, 5);
    });
  });
  
  describe('UI.prototype.outputMap', function(){
    it('should be a function', function(){
      assert.isFunction(ui.outputMap);
    });
    it('should have 1 argument', function(){
      assert.equal(ui.outputMap.length, 1);
    });
  });
  
});