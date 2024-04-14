// import axios, { AxiosRequestConfig } from 'axios';
// import aspida from '@aspida/axios';
// import { API_ENDPOINT } from './env';

// const config: AxiosRequestConfig = {
//   baseURL: API_ENDPOINT,
//   responseType: 'json',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   transformRequest: [
//     function transformRequest(data) {
//       return JSON.stringify(data);
//     },
//   ],
//   transformResponse: [
//     function transformResponse(data) {
//       return JSON.parse(data);
//     },
//   ],
// };

// const generateApiClient = (attachConfig: AxiosRequestConfig) => {
//   return api(aspida(axios, attachConfig));
// };

// /**
//  * aspidaのclient
//  */
// export const apiClient = generateApiClient(config);
