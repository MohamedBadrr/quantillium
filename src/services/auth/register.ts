type RegisterProps = {
  email: string;
  password: string;
  full_name: string;
  company: string;
  phone_number: string;
};

export type RegisterResponse = {
  status: string;
  result: null;
};
export const register =  async ({
    email,
    password,
    company,
    full_name,
    phone_number,
  }: RegisterProps) : Promise<RegisterResponse> => {
    try {
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          company,
          full_name,
          phone_number,
        }),
      });
      if (!response.ok) {
        throw new Error("An error occurred while trying to register");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Some thing went Wrong" + error);
    }
  };
