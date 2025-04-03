import { mapAPIKeysResponseToAPIKeys } from "@/lib/mappers/mapAPIKeysResponseToAPIKeys";

type getAPIKeysProps = {
    user_id : string;
}

export type getAPIKeysResponse = {
    status: string; 
    result: ApiKeyResponse[];
  }
  export interface ApiKeyResponse {
    apikey: string;
    name: string;
    active: boolean;
  }

export const getAPIKeys = async ({user_id}:getAPIKeysProps) => {
 try {
    const response = await fetch(`/api/get_api_keys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user_id}),
      });
      if (!response.ok) {
        throw new Error("An error occurred while trying to get API keys");
      }
      const data = await response.json();
      return mapAPIKeysResponseToAPIKeys(data);
 } catch (error) {
     throw new Error("Some thing went Wrong" + error);
 }
}