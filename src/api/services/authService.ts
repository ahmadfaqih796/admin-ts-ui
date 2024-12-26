import apiClient from "../apiClient";

export enum AuthApi {
  SignIn = "/auth/login",
  SignUp = "/auth/signup",
  Logout = "/auth/logout",
  Refresh = "/auth/refresh",
  User = "/user",
}

const signin = (data: any) => apiClient.post({ url: AuthApi.SignIn, data });

export default { signin };
