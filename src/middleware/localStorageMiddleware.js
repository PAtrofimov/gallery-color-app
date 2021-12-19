import StorageService from "../api/StorageService";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    StorageService.set(getState());
    console.log({state: getState()});
    return result;
  };
};
export default localStorageMiddleware;
