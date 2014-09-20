var chai = require('chai');
var path = require('path');
var deepMerge = require(path.resolve(__dirname, '../deepMerge'));
var emptyObj, testObjA, testObjB, testObjC, testFn;

beforeEach(function() {
  testFn = function() {};
  emptyObj = {};

  testObjA = {
    level1: 'Foo',
    level: { 2: 'Foo' },
    happy: { golucky: null },
    harken: 'Lapel'
  };

  testObjB = {
    level1: 'Bar',
    level: { 2: 'Baz' },
    happy: { gohome: 'nay', golucky: 'frap' }
  };

  testObjC = {
    flappybird: 'Nay',
    happy: testFn
  };
});

describe('deepMerge:', function() {
  it('should exist and be a function', function() {
    chai.expect(deepMerge).to.be.function;
  });

  it('should populate empty objects', function() {
    chai.expect(deepMerge(emptyObj, testObjA)).to.deep.equal(testObjA);
  });

  it('should merge deep objects properly', function() {
    chai.expect(deepMerge(testObjA, testObjB)).to.deep.equal({
      level1: 'Bar',
      level: { 2: 'Baz' },
      happy: { gohome: 'nay', golucky: 'frap' },
      harken: 'Lapel'
    });
  });

  it('should handle arbitrary numbers of arguments', function() {
    chai.expect(deepMerge(emptyObj, testObjA, testObjB, testObjC)).to.deep.equal({
      level1: 'Bar',
      level: { 2: 'Baz' },
      harken: 'Lapel',
      flappybird: 'Nay',
      happy: testFn
    });
  });
});
