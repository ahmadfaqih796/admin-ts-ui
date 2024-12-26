import apiClient from "../apiClient";

export interface SignInRequest {
  username: string;
  password: string;
  expiresInMins: number;
}

export enum AuthApi {
  SignIn = "/auth/login",
  SignUp = "/auth/signup",
  Logout = "/auth/logout",
  Refresh = "/auth/refresh",
  User = "/user",
}

const signin = (data: SignInRequest) =>
  apiClient.post<any>({ url: AuthApi.SignIn, data });

export default { signin };
