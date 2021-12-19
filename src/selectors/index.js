import { createSelector } from "reselect";
import { averageFromArray } from "../utils";

const selectColors = (state) => {
  return state.color.colors;
};
const selectColorId = (state, colorId) => colorId;

const selectColorsWithId = createSelector(
  [selectColors],
  (colors) => colors.reduce((acc, color) => ({...acc, [color.id]: color}), {})
);

const selectColorById = createSelector(
  [selectColorsWithId, selectColorId],
  (colors, colorId) => {
     return colors[colorId]
  }
);

const selectColorsWithAverageRating = createSelector(selectColors, (colors) => {
  return colors.map((color) => {
    const averageRating = averageFromArray(color?.rating);
    return { ...color, averageRating };
  });
});

const selectIdColors = createSelector(selectColors, (colors) => {
  return colors.map((color) => color.id);
});

const selectColorWithAverageRatingById = createSelector(
  selectColorById,
  (color) => {
     console.log("selectColorWithAverageRatingById", {color});
    const averageRating = averageFromArray(color?.rating);
    return { ...color, averageRating };
  }
);

export {
  selectIdColors,
  selectColorsWithAverageRating,
  selectColorWithAverageRatingById,
};
