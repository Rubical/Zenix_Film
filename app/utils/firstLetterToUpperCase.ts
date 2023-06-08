export const firstLetterToUpperCase = (word: string | undefined) => {
  return word ? word[0].toUpperCase() + word.slice(1) : "";
};
