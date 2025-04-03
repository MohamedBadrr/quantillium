
// const mapApiGetUserDataResponseToUserData = (response: getAPIKeysResponse):ApiKey[] =>{
//     try {
//         const mappedData =  response.result.map((key)=>{
//             return ({
//                 name: key.name,
//                 apiKey: key.apikey,
//                 status: key.active ? "Active" : "Inactive" ,
//                 lastUsed: "",
//                 requests: "",
//                 avgResponse: "",
//                 errors: "",
//                 activity: key.active ? "active" : "Inactive"
//             })
//         })
//         return mappedData;
//        } catch (error) {
//         console.log("Error in mapping API keys response to API keys", error);
//         return [];
//        }
// }