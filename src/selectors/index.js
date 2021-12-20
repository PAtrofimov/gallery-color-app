import { createSelector } from "reselect";
import { averageFromArray } from "../utils";

const selectColors = (state) => {
  return state.color.colors;
};
const selectColorId = (state, colorId) => colorId;
const selectIsAdmin = (state) => state.user.isAdmin;

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

const selectIdColors = createSelector(selectColors, (colors) => {
  return colors.map((color) => color.id);
});

const makeSelectColorWithAverageRatingById = () => createSelector(
  selectColorById,
  (color) => {
    const averageRating = averageFromArray(color?.rating);
    return { ...color, averageRating };
  }
);

export {
  selectIdColors,
  makeSelectColorWithAverageRatingById,
  selectIsAdmin,
};
