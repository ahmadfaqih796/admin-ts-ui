export type User = {
  name: string;
  age: number;
};

export type UserMap<T> = {
  [key: string]: T;
};

const array = ["a", "b", "c"];
const array2 = [
  {
    name: "faqih",
    age: 18,
  },
  {
    name: "Raaaa",
    age: "18",
    isActive: true,
  },
];
export type Users = User[];
