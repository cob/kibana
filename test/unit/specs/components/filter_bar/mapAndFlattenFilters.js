define(function (require) {
  describe('Filter Bar Directive', function () {
    describe('mapAndFlattenFilters()', function () {
      var sinon = require('test_utils/auto_release_sinon');
      var mapAndFlattenFilters, $rootScope;

      beforeEach(module('kibana'));

      beforeEach(function () {
        module('kibana/courier', function ($provide) {
          $provide.service('courier', require('fixtures/mock_courier'));
        });
      });

      beforeEach(inject(function (Private, _$rootScope_) {
        mapAndFlattenFilters = Private(require('components/filter_bar/lib/mapAndFlattenFilters'));
        $rootScope = _$rootScope_;
      }));

      var filters = [
        null,
        [
          { meta: { index: 'logstash-*' }, exists: { field: '_type' } },
          { meta: { index: 'logstash-*' }, missing: { field: '_type' } }
        ],
        { meta: { index: 'logstash-*' }, query: { query_string: { query: 'foo:bar' } } },
        { meta: { index: 'logstash-*' }, range: { bytes: { lt: 2048, gt: 1024 } } },
        { meta: { index: 'logstash-*' }, query: { match: { _type: { query: 'apache', type: 'phrase' } } } }
      ];

      it('should map and flatten the filters', function (done) {
        mapAndFlattenFilters(filters).then(function (results) {
          expect(results).to.have.length(5);
          expect(results[0]).to.have.property('meta');
          expect(results[1]).to.have.property('meta');
          expect(results[2]).to.have.property('meta');
          expect(results[3]).to.have.property('meta');
          expect(results[4]).to.have.property('meta');
          expect(results[0].meta).to.have.property('key', 'exists');
          expect(results[0].meta).to.have.property('value', '_type');
          expect(results[1].meta).to.have.property('key', 'missing');
          expect(results[1].meta).to.have.property('value', '_type');
          expect(results[2].meta).to.have.property('key', 'query');
          expect(results[2].meta).to.have.property('value', 'foo:bar');
          expect(results[3].meta).to.have.property('key', 'bytes');
          expect(results[3].meta).to.have.property('value', '1,024 to 2,048');
          expect(results[4].meta).to.have.property('key', '_type');
          expect(results[4].meta).to.have.property('value', 'apache');
          done();
        });
        $rootScope.$apply();
      });

    });
  });
});
