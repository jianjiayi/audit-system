/* eslint-disable func-names */
/* eslint-disable object-shorthand */
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
