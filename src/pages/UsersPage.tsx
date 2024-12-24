const UsersPage: React.FC<any> = (person: { name: string; age: number }) => {
  return <div>{person.name}</div>;
};

export default UsersPage;
