define(function (require) {
  return function AggTypeMetricSumProvider(Private) {
    var MetricAggType = Private(require('components/agg_types/metrics/_metric_agg_type'));

    return new MetricAggType({
      name: 'sum',
      title: 'Sum',
      makeLabel: function (aggConfig) {
        return aggConfig.params.legend || 'Sum of ' + aggConfig.params.field.displayName;
      },
      params: [
        {
          name: 'field',
          filterFieldTypes: 'number'
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
