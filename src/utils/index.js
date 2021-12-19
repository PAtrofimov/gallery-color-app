export function averageFromArray(array) {
  const length = array?.length;
  let averageRating = 0;
  if (length) {
    averageRating = array.reduce((prev, cur) => prev + cur);
  }
  return averageRating;
}

export function generateArrayAndReverse(number) {
  return new Array(number)
    .fill(0)
    .map((_, index) => index + 1)
   .reverse();
}
