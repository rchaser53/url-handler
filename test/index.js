const assert = require('power-assert')
const {
  urlHandler,
  hostHandler,
  createUrl,
  addQueryAttacher,
  addQuery
} = require('..')

describe('url-handler', function() {
  describe('urlHandler', function() {
    it('should return "/xxx" format ', function() {
      assert.equal(urlHandler('hoge'), '/hoge');
      assert.equal(urlHandler('/hoge'), '/hoge');
      assert.equal(urlHandler('hoge/'), '/hoge');
      assert.equal(urlHandler('/hoge/'), '/hoge');
    });

    it('should return "/xxx/yyy.js" format ', function() {
      assert.equal(urlHandler('hoge/abc.js'), '/hoge/abc.js');
      assert.equal(urlHandler('/hoge/abc.js'), '/hoge/abc.js');
    });
  });

  describe('hostHandler', function() {
    it('should return "http://sample" format ', function() {
      assert.equal(hostHandler('http://localhost'), 'http://localhost');
      assert.equal(hostHandler('http://localhost/'), 'http://localhost');
      assert.equal(hostHandler('http://localhost:3000'), 'http://localhost:3000');
      assert.equal(hostHandler('http://localhost:3000/'), 'http://localhost:3000');
    });
  });

  describe('createUrl', function() {
    it('should return "http://xxx/yyy.js" format ', function() {
      assert.equal(createUrl('http://localhost', ['yyy.js']), 'http://localhost/yyy.js');
      assert.equal(createUrl('http://localhost/', ['yyy.js']), 'http://localhost/yyy.js');
      assert.equal(createUrl('http://localhost:3000', ['yyy', 'zzz.js']), 'http://localhost:3000/yyy/zzz.js');
    });
  });

  describe('addQueryAttacher', function() {
    it('should return "http://xxx/yyy.js?" format ', function() {
      assert.equal(addQueryAttacher('http://localhost/yyy.js'), 'http://localhost/yyy.js?');
      assert.equal(addQueryAttacher('http://localhost/yyy.js?'), 'http://localhost/yyy.js?');
    });
  });

  describe('addQuery', function() {
    it('should return "http://xxx/yyy.js?abc=def&hij=klm" format ', function() {
      assert.equal(addQuery('http://localhost/yyy.js', {
        abc: 'def'
      }), 'http://localhost/yyy.js?abc=def');

      assert.equal(addQuery('http://localhost/yyy.js', {
        abc: 'def',
        hij: 'klm'
      }), 'http://localhost/yyy.js?abc=def&hij=klm');

      assert.equal(addQuery('http://localhost/yyy.js', {}), 'http://localhost/yyy.js?');
    });
  });
});