type updateUserProps = {
    user_id:string,
    field_name: string,
    field_value: string | boolean
}

export interface updateUserResponse {
    status:  "SUCCESS" | "USER_DOES_NOT_EXISTS" | "INCORRECT_FIELD_NAME" | "INCORRECT_FIELD_VALUE_TYPE" | string;
    result: null
  }

export const updateUser = async ({user_id , field_name , field_value}:updateUserProps):Promise<updateUserResponse>=>{
    console.log("The send Data " , user_id , field_name , field_value );
    
try {
    const response = await fetch(`/api/user_update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({field_name: field_name.toLocaleUpperCase() , field_value , user_id}),
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