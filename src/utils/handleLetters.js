export const handleLetters = (letters) => {
  const letterCounts = letters ? letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {}) : null;

  return Object.entries(letterCounts || [])
    .sort((a, b) => b[1] - a[1])
    .map(([letter, count]) => ({ letter, count }));
};