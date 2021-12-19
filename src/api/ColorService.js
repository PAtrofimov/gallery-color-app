import axios from "axios";

export default class ColorService {
   static async get() {
      return await axios.get('./colors.json');
   }
}