export const handleData = (data) => {
  const { text, excludeSpaces } = data || {};

  let arrayCharacters = [];
  let result = {};

  if (text && excludeSpaces) {
    arrayCharacters = [...text];

    const excludeSpacesArray = arrayCharacters.filter((el) => el === " ");

    const words = text.split(" ");
    const sentences = text.split(".").filter((el) => el !== "");

    result = {
      totalCharacters: excludeSpacesArray.length,
      totalWords: words.length,
      totalSentences: sentences.length,
    };
  } else if (text && !excludeSpaces) {
    arrayCharacters = [...text];

    const words = text.split(" ");
    const sentences = text.split(".").filter((el) => el !== "");

    result = {
      totalCharacters: arrayCharacters.length,
      totalWords: words.length,
      totalSentences: sentences.length,
    };
  }

  return result;
};
