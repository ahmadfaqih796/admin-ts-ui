import { Result } from "#/api.type";
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer Token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<Result>) => {
    return response;
  },
  (error: AxiosError<Result>) => {
    return Promise.reject(error);
  }
);

class APIClient {
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<Result<T>>>(config)
        .then((res: AxiosResponse<Result>) => {
          //  resolve(res as unknown as Promise<T>);
          resolve(res.data as T);
        })
        .catch((err: Error | AxiosError) => {
          reject(err);
        });
    });
  }
}

export default new APIClient();
