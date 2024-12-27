import authService, {
  SignInRequest,
  SignInResponse,
} from "@/api/services/authService";
import "@/styles/login.style.css";
import React from "react";

function isSignInResponse(response: any): response is SignInResponse {
  return (
    typeof response.id === "number" &&
    typeof response.username === "string" &&
    typeof response.email === "string" &&
    typeof response.firstName === "string" &&
    typeof response.lastName === "string" &&
    typeof response.accessToken === "string" &&
    typeof response.refreshToken === "string"
  );
}

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
      const response: unknown = await authService.signin(payload);
      if (isSignInResponse(response)) {
        console.log("Valid response:", response);
      } else {
        console.error("Invalid response format:", response);
      }
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
