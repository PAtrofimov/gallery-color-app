import { SET_ADMIN } from './action-types';

const initialState = {
   isAdmin: false
}

export default function userReducer(state = initialState, action) {

   switch (action.type) {
      case SET_ADMIN:
         return { ...state, isAdmin: action.payload };
      default:
         return state;
   }

}
