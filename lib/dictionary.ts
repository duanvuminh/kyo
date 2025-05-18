export const strokeColorList = [
  "red",
  "green",
  "blue",
  "gray",
  "darkslategray",
  "lightgray",
  "deepskyblue",
  "rebeccapurple",
];

export const svgFromWord = (id: string): string => {
  const svgPath = "https://kanjivg.tagaini.net/kanjivg/kanji/";
  const postId = id.charCodeAt(0).toString(16);
  const path = `${svgPath}0${postId}.svg`;
  return path;
};
