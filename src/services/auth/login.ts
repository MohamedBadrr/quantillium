import { LoginResponse } from "./LoginResponse";

type LoginProps = {
  email: string;
  password: string;
};


const login = async ({ email, password }: LoginProps):Promise<LoginResponse> => {
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("An error occurred while trying to login");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Some thing went Wrong" + error);
  }
};

export default login;
