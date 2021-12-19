import { createSelector } from "reselect";
import { averageFromArray } from "../utils";

const selectColors = (state) => {
  console.log({ state2: state });
  return state.color.colors;
};
const selectColorId = (state, colorId) => colorId;

const selectColorById = createSelector(
  [selectColors, selectColorId],
  (colors, colorId) => colors.find((color) => color.id === colorId)
);

const selectColorsWithAverageRating = createSelector(selectColors, (colors) => {
  return colors.map((color) => {
    const averageRating = averageFromArray(color?.rating);
    return { ...color, averageRating };
  });
});

const selectIdColors = createSelector(selectColors, (colors) => {
  console.log({ colors });
  return colors.map((color) => color.id);
});

const selectColorWithAverageRatingById = createSelector(
  selectColorById,
  (color) => {
     console.log({color});
    const averageRating = averageFromArray(color?.rating);
    return { ...color, averageRating };
  }
);

export {
  selectIdColors,
  selectColorsWithAverageRating,
  selectColorWithAverageRatingById,
};
