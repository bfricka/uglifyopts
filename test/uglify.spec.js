var chai = require('chai');
var uglifyopts = require('../index');

describe('UglifyOpts', function() {
  it('should work', function() {
    chai.expect(uglifyopts.defaults()).to.be.object;
    chai.expect(uglifyopts.beautify({ nay: 'hey' })).to.have.deep.property('nay', 'hey');
  });
});
