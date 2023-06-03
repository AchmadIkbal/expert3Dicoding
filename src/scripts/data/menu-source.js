import ENDPOINT_API from '../globals/api-endpoint';
// import { getData, postData } from "../helper/helper-fetch";

class MenuSource {
  static async homeMenu() {
    const response = await fetch(ENDPOINT_API.HOME_MENU);
    const responseJson = await response.json();
    return responseJson.restaurants;
    // if (response.restaurant) {
    //     return response.restaurant
    // } else {
    //     console.log('data kosong')
    // }
  }

  static async detail(id) {
    const response = await fetch(ENDPOINT_API.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
    // if (response.restaurant) {
    //     return response.restaurant;
    // } else {
    //     console.log('data kosong')
    // }
  }
}
export default MenuSource;
