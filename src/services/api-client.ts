import axios from 'axios';
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '507a56a7a83b4fee8b7fa18c283bea8f',
  },
});
// const axiosInstance = axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//     key: '507a56a7a83b4fee8b7fa18c283bea8f',
//   },
// });
// class APIClient<T> {
//   endpoint: string;
//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }
//   getAllGenres() {
//     return <T>{ data: genres };
//   }
//   getAllGames() {
//     return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
//   }
// }
// export default APIClient;
