export const handleRatio = (part, total) => {
  const ratio = (part / total) * 100;
  return ratio.toFixed(2) + "%";
};
