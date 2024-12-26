import { User } from "#/entity.type";
import { AccessToken } from "#/user.type";
import apiClient from "../apiClient";

export interface SignInRequest {
  username: string;
  password: string;
  expiresInMins: number;
}

export type SignInResponse = User & AccessToken;

export enum AuthApi {
  SignIn = "/auth/login",
  SignUp = "/auth/signup",
  Logout = "/auth/logout",
  Refresh = "/auth/refresh",
  User = "/user",
}

const signin = (data: SignInRequest) =>
  apiClient.post<SignInResponse>({ url: AuthApi.SignIn, data });

export default { signin };
