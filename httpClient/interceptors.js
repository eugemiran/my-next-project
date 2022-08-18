import humps from 'humps';
// import { signOut } from 'next-auth/client';

export const RUNNING_SERVER_SIDE = typeof window === 'undefined';


const applyInterceptors = (client) => {
  client.interceptors.request.use((config) => {
    // if (config.skipStringify) return config;

    // config.data = config.data
    //   ? JSON.stringify(humps.decamelizeKeys(config.data))
    //   : {};
    return config;
  });

  client.interceptors.response.use(
    async (response) => {
      response.data = humps.camelizeKeys(response.data);
      return response;
    },
    (error) => {
      if ((error.response.status === 401) & !RUNNING_SERVER_SIDE) {
        // sign out
      }
      return Promise.reject(error);
    }
  );
};

export default applyInterceptors;
