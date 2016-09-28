// test for the Map function
var map = new Map(3, 3, 1);
describe('Map Object Type', function(){
  describe('Map.prototype.constructor', function(){
    it('should be a function', function(){
      assert.isFunction(map.constructor);
    });
    it('should have 3 arguments', function(){
      assert.equal(map.constructor.length, 3);
    });
  });
  
  describe('Map.prototype.setInitialState', function(){
    it('should be a function', function(){
      assert.isFunction(map.setInitialState);
    });
    it('should have 1 argument', function(){
      assert.equal(map.setInitialState.length, 1);
    });
    context('examine return value', function() {
      it('should return true(alive) if life profitability is 1', function(){
        assert.strictEqual(map.setInitialState(1), true);
      });
      it('should return false(dead) if life profitability is 0', function(){
        assert.strictEqual(map.setInitialState(0), false);
      });
    });
  });
  
  describe('Map.prototype.hasLife', function(){
    it('should be a function', function(){
      assert.isFunction(map.hasLife);
    });
    it('should have 2 arguments', function(){
      assert.equal(map.hasLife.length, 2);
    });
    context('examine return value', function(){
      it('should return the same value as in (rows - 1, cols - 1) if the parameter ordinate is (-1, -1)', function(){
        assert.strictEqual(map.hasLife(-1, -1), map.cellMap[map.rows - 1][map.cols - 1]);
      });
      it('should return the same value as in (0, cols - 1) if the parameter ordinate is (0, -1)', function(){
        assert.strictEqual(map.hasLife(0, -1), map.cellMap[0][map.cols - 1]);
      });
      it('should return the same value as in (rows - 1, 0) if the parameter ordinate is (-1, 0)', function(){
        assert.strictEqual(map.hasLife(-1, 0), map.cellMap[map.rows - 1][0]);
      });
      it('should return the same value as in (0, 0) if the parameter ordinate is (rows, cols)', function(){
        assert.strictEqual(map.hasLife(map.rows, map.cols), map.cellMap[0][0]);
      });
      it('should return the same value as in (rows - 1, 0) if the parameter ordinate is (rows - 1, cols)', function(){
        assert.strictEqual(map.hasLife(map.rows - 1, map.cols), map.cellMap[map.rows - 1][0]);
      });
      it('should return the same value as in (0, cols - 1) if the parameter ordinate is (rows, cols - 1)', function(){
        assert.strictEqual(map.hasLife(map.rows, map.cols - 1), map.cellMap[0][map.cols - 1]);
      });
    });
  });
});