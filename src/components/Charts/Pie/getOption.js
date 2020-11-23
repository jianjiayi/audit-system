export default function(option, data) {
  return {
    tooltip: {
      ...option.tooltip,
      // ...tooltip,
    },
    animationDelayUpdate: function(idx) {
      return idx * 5;
    },
    ...option,
    ...data,
  };
}
