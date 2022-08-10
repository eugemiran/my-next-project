import axios from 'axios';

import applyInterceptors from 'httpClient/interceptors';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const httpClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

applyInterceptors(httpClient);

export default httpClient;
