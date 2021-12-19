import {
  SET_COLORS,
  ADD_COLOR,
  EDIT_COLOR,
  REMOVE_COLOR,
  SET_RATING,
  SET_ISLOADING,
  SET_ERROR,
} from "./action-types";

const initialState = {
  colors: [],
  isLoading: false,
  error: "",
};

export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COLORS:
      return { ...state, colors: action.payload };
    case SET_ISLOADING:
      return { ...state, isLoading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, { ...action.payload, id: Date.now() }],
      };
    case EDIT_COLOR: {
      const { id, name, description, color, rate } = action.payload;

      const newColors = state.colors.map((col) => {
        if (col.id === id) {
          let rating = col.rating || [];
          rating = rate ? [...rating, rate] : rating;
          return { ...col, name, description, color, rating };
        }

        return col;
      });

      return { ...state, colors: newColors };
    }
    case REMOVE_COLOR: {
      return {
        ...state,
        colors: state.colors.filter((color) => color.id !== action.payload),
      };
    }
    case SET_RATING: {
      const { id, rate } = action.payload;
      const newColors = state.colors.map((col) => {
        if (col.id === id) {
          return { ...col, rating: [...state.colors.rating, rate] };
        }

        return col;
      });

      return { ...state, colors: newColors };
    }
    default:
      return state;
  }
}
