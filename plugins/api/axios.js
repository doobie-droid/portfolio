import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const applyAxiosInterceptors = (axios) => {
    axios.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        const { response } = error;

        if (response?.data?.message) {
          alert(response.data.message);
        }
        throw error;
      }
    );
    axios.interceptors.request.use((req) => {
      return req;
    });
  };

  const axiosInstance = axios.create({
    baseURL: config.public.apiBase,
    withCredentials: true,
    "Access-Control-Allow-Origin": `*`,
  });

  applyAxiosInterceptors(axiosInstance);

  nuxtApp.provide("axios", axiosInstance);
});
