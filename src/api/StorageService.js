const storageName = "galleryState";

export default class StorageService {
  static get() {
    return JSON.parse(sessionStorage.getItem(storageName));
  }
  static set(state) {
   sessionStorage.setItem(storageName, JSON.stringify(state));
  }
}
