// import React from 'react'

type Props = {
  name: string;
  age: number;
  onClick: () => void;
};

const HomePage: React.FC<Props> = ({ name, age, onClick }) => {
  return (
    <div>
      <h1>{`Hello ${name}! You are ${age} years old.`}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

HomePage.defaultProps = {
  name: "John Doe",
  age: 30,
  onClick: () => {
    console.log("ini click");
  },
};

export default HomePage;
