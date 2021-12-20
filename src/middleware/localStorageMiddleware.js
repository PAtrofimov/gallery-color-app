import StorageService from "../api/StorageService";
import { SET_COLORS, SET_ERROR, SET_ISLOADING } from "../store/reducers/color/action-types";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (![SET_COLORS, SET_ERROR, SET_ISLOADING].includes(action.type)) {
      StorageService.set(getState());
      console.log("store ", {store: getState(), action});
    }
    return result;
  };
};
export default localStorageMiddleware;
