define(function (require) {
  return function AggTypeMetricWeightedMeanProvider(Private) {
    var MetricAggType = Private(require('ui/agg_types/metrics/MetricAggType'));

    return new MetricAggType({
      name: 'weighted-mean',
      title: 'Weighted Mean',
      makeLabel: function (aggConfig) {
        return 'Weighted Mean of ' + aggConfig.params.value + ' over ' + aggConfig.params.weight;
      },
      params: [
        {
          name: 'value',
          type: 'string'
        },
        {
          name: 'weight',
          type: 'string'
        }
      ]
    });
  };
});
