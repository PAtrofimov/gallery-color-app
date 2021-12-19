import ColorService from "../../../api/ColorService";
import StorageService from "../../../api/StorageService";
import {
  ADD_COLOR,
  EDIT_COLOR,
  REMOVE_COLOR,
  SET_COLORS,
  SET_ERROR,
  SET_ISLOADING,
  SET_RATING,
} from "./action-types";

export const ColorActionCreators = {
  setColors: (colors) => ({ type: SET_COLORS, payload: colors }),
  setError: (error) => ({ type: SET_ERROR, payload: error }),
  setIsLoading: (isLoading) => ({ type: SET_ISLOADING, payload: isLoading }),
  addColor: (color) => ({ type: ADD_COLOR, payload: color }),
  editColor: (color) => ({ type: EDIT_COLOR, payload: color }),
  removeColor: (id) => ({ type: REMOVE_COLOR, payload: id }),
  setRating: (color) => ({ type: SET_RATING, payload: color }),
  fetchColors: () => async (dispatch) => {
    try {
      dispatch(ColorActionCreators.setIsLoading(true));
      let state = StorageService.get();
      let colors = state?.color?.colors;
      if (!colors || colors.length === 0) {
        colors = await ColorService.get();
        console.log("colors not from kash", { colors });
      }

      dispatch(ColorActionCreators.setColors(colors));
    } catch (error) {
      dispatch(ColorActionCreators.setError(error.message));
    } finally {
      dispatch(ColorActionCreators.setIsLoading(false));
    }
  },
};
