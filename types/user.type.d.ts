export type User = {
  name: string;
  age: number;
};

export type UserMap<T> = {
  [key: string]: T;
};

export type Users = User[];
