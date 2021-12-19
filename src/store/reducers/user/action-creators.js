import { SET_ADMIN } from "./action-types";

export const UserActionCreators = {
   setIsAdmin: (isAdmin) => ({ type: SET_ADMIN, payload: isAdmin }),
 }