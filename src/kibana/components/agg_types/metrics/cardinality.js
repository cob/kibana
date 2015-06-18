define(function (require) {
  return function AggTypeMetricCardinalityProvider(Private) {
    var MetricAggType = Private(require('components/agg_types/metrics/_metric_agg_type'));
    var fieldFormats = Private(require('registry/field_formats'));

    return new MetricAggType({
      name: 'cardinality',
      title: 'Unique Count',
      makeLabel: function (aggConfig) {
        return aggConfig.params.legend || 'Unique count of ' + aggConfig.params.field.displayName;
      },
      getFormat: function () {
        return fieldFormats.getDefaultInstance('number');
      },
      params: [
        {
          name: 'field'
        },
        {
          name: 'legend',
          type: 'string',
          advanced: true,
          write: function () {}
        }
      ]
    });
  };
});
