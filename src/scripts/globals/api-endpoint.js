import CONFIG from './config';

const ENDPOINT_API = {
  HOME_MENU: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,

};
export default ENDPOINT_API;
