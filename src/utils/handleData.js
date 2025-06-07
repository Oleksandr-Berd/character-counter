export const handleData = (data) => {
  const { text, excludeSpaces } = data || {};

  let arrayCharacters = [];
  let result = {};

  if (text) arrayCharacters = [...text.toLowerCase()];
  const excludeSpacesArray = arrayCharacters.filter(
    (el) => ![" ", ",", "-", "?", "!", ":", ";", "."].includes(el)
  );

  const sentences = text?.split(/[.!?]/).filter((el) => el !== "");

  if (text && excludeSpaces) {
    const words = text.split(" ").filter((el) => el !== "");

    result = {
      totalCharacters: excludeSpacesArray.length,
      totalWords: words.length,
      totalSentences: sentences.length,
      letters: excludeSpacesArray,
    };
  } else if (text && !excludeSpaces) {
    const words = text.split(" ");

    result = {
      totalCharacters: arrayCharacters.length,
      totalWords: words.length,
      totalSentences: sentences.length,
      letters: excludeSpacesArray,
    };
  }

  return result;
};
