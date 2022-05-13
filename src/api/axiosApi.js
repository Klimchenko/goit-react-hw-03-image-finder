import axios from 'axios';

const API_KEY = '24760399-090abf7dadf4273caa09f36f4';
const BASE_URL = 'https://pixabay.com/api/';

export const axiosApi = (searchQuery = '', currentPage = 1, pageSize = 12) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data);
};

export default axiosApi;
