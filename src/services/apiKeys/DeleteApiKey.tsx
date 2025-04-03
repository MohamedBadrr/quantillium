type DeleteApiKeyProps = {
    api_key: string;
    user_id: string;
}

export interface DeleteApiKeyResponse {
    status: "SUCCESS" | "USER_DOES_NOT_EXISTS" | "API_KEY_DOES_NOT_EXISTS"| string;
    result: {
      api_key: string;
    };
  }

export const DeleteApiKey = async ({api_key , user_id}:DeleteApiKeyProps):Promise<DeleteApiKeyResponse>=>{
try {
    const response = await fetch(`/api/remove_api_key`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({api_key , user_id}),
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