import { ColorActionCreators } from "./color/action-creators";
import { UserActionCreators } from "./user/action-creators";

export const allActionCreators = {
   ...ColorActionCreators,
   ...UserActionCreators,
}