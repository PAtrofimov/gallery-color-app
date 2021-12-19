import { colors } from "../data/colors";

export default class ColorService {
   static async get() {
      return await new Promise(resolve => setTimeout(() => resolve(colors), 200));
   }
}