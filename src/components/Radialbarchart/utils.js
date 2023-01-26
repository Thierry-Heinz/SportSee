export const getScaledValue = function (
  value,
  sourceRangeMin,
  sourceRangeMax,
  targetRangeMin,
  targetRangeMax
) {
  const targetRange = targetRangeMax - targetRangeMin;
  const sourceRange = sourceRangeMax - sourceRangeMin;
  return (
    ((value - sourceRangeMin) * targetRange) / sourceRange + targetRangeMin
  );
};
