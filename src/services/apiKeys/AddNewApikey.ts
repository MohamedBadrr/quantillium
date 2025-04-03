type AddNewApikeyProps = {
    name: string;
    user_id: string;
}

export interface AddNewApikeyResponse {
    status: "SUCCESS" | "API_KEY_ALREADY_EXISTS" | string;
    result: {
      api_key: string;
    };
  }

export const AddNewApikey = async ({name , user_id}:AddNewApikeyProps):Promise<AddNewApikeyResponse>=>{
try {
    const response = await fetch(`/api/add_api_key`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name , user_id}),
        });
        if (!response.ok) {
            throw new Error("An error occurred while trying to get API keys");
        }
        const data = await response.json();
        return data;
} catch (error) {
    throw new Error("Some thing went Wrong" + error);
}
}