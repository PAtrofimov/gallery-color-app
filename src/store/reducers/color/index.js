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
      const { id, text, description, rate } = action.payload;
      const rating = rate ? [...state.colors.rating, rate] :state.colors.rating;
      
      const newColors = state.colors.filter((color) => {
        if (color.id === id) {
          return { ...color, text, description, rating};
        }

        return color;
      });

      return { ...state, colors: newColors };
    }
    case REMOVE_COLOR: {
      const { id } = action.payload;
      return {
        ...state,
        colors: state.colors.filter((color) => color.id !== id),
      };
    }
    case SET_RATING: {
      const { id, rate } = action.payload;
      const newColors = state.colors.filter((color) => {
        if (color.id === id) {
          return { ...color, rating: [...this.state.ratings, rate] };
        }

        return color;
      });

      return { ...state, colors: newColors };
    }
    default:
      return state;
  }
}
