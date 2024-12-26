export type User = {
  name: string;
  age: number;
};

export interface AccessToken {
  accessToken: string;
  refreshToken: string;
}

export type UserMap<T> = {
  [key: string]: T;
};

export type Users = User[];
