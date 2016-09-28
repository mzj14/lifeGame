var rules = new Rules([3], [2]);

describe('Rules Object Type', function(){
  describe('Rules.prototype.constructor', function(){
    it('should be a function', function(){
      assert.isFunction(rules.constructor);
    });
    it('should have 2 arguments', function(){
      assert.equal(rules.constructor.length, 2);
    });
  });
  
  describe('Rules.prototype.getNeighborLifeNum', function(){
    it('should be a function', function(){
      assert.isFunction(rules.getNeighborLifeNum);
    });
    it('should have 3 arguments', function(){
      assert.equal(rules.getNeighborLifeNum.length, 3);
    });
    context('examine return value', function(){
      it('should return 8 since currently all the cells are alive', function(){
        assert.strictEqual(rules.getNeighborLifeNum(map, 0, 0), 8);
      }); 
    });
  });
  
  describe('Rules.prototype.judgeNextCellStateByLifeNum', function(){
    it('should be a function', function(){
      assert.isFunction(rules.judgeNextCellStateByLifeNum);
    });
    it('should have 2 arguments', function(){
      assert.equal(rules.judgeNextCellStateByLifeNum.length, 2);
    });
    context('examine return value', function(){
      var i = 0;
      if (typeof rules.lifeNumRange[0] !== 'undefined'){
        it('should return true since ' + rules.lifeNumRange[0] + ' is in the lifeNumRange', function(){
            assert.strictEqual(rules.judgeNextCellStateByLifeNum(map.cellMap[0][0], rules.lifeNumRange[0]), true);
        });
      }
      if (typeof rules.remainNumRange[0] !== 'undefined'){
        it('should return current cell value since ' + rules.remainNumRange[0] + ' is in the remainNumRange', function(){
            assert.strictEqual(rules.judgeNextCellStateByLifeNum(map.cellMap[0][0], rules.remainNumRange[0]), map.cellMap[0][0]);
        });
      }
      it('should return false since ' + 9 + ' isn\'t in the lifeNumRange or remainNumRange', function(){
            assert.strictEqual(rules.judgeNextCellStateByLifeNum(map.cellMap[0][0], 9), false);
      });
    });
  });
  
  describe('Rules.prototype.generateNextCellMap', function(){
    it('should be a function', function(){
      assert.isFunction(rules.generateNextCellMap);
    });
    it('should have 1 argument', function(){
      assert.equal(rules.generateNextCellMap.length, 1);
    });
  });
});