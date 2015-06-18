define(function (require) {
  return function AggTypeMetricMinProvider(Private) {
    var MetricAggType = Private(require('components/agg_types/metrics/_metric_agg_type'));

    return new MetricAggType({
      name: 'min',
      title: 'Min',
      makeLabel: function (aggConfig) {
        return aggConfig.params.legend || 'Min ' + aggConfig.params.field.displayName;
      },
      params: [
        {
          name: 'field',
          filterFieldTypes: 'number,date'
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
