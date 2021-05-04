import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
});

const ApiMethods = {
  get: async (url: string = "", config?: AxiosRequestConfig) => {
    const promise = new Promise((resolve) => setTimeout(resolve, 5000));

    await promise;
    return axios.get(url, config).then((response) => response);
  },
};

export { ApiMethods };

export default api;
