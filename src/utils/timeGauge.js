export const timeGauge = (text) => {
  const length = text.length;

  if (length === 0) return "0 minutes";
  if (length < 50) return "< 1 minute";
  if (length < 100) return "2-5 minutes";
  if (length < 500) return "5-10 minutes";
  return "more than 10 minutes";
};
