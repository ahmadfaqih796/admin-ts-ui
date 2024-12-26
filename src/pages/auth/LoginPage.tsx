import authService, { SignInRequest } from "@/api/services/authService";
import React from "react";

const LoginPage: React.FC<any> = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const payload: SignInRequest = {
      username: username as string,
      password: password as string,
      expiresInMins: 1,
    };
    try {
      const response = await authService.signin(payload);
      console.log("response", response);
    } catch (error) {
      console.log("eeeeerrrr", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          defaultValue="emilys"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          defaultValue="emilyspass"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
