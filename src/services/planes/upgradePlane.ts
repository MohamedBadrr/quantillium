import { SENDPLANE } from "@/types/Plane";

export interface SENDPLANEResponse {
  data: {
    paymentUrl: string;
  };
}

export const upgradePlane = async ({
  callsAmount,
  callsId,
  callsType,
  currency,
  description,
  userId,
  amount,
}: SENDPLANE): Promise<SENDPLANEResponse> => {
  try {
    const response = await fetch(
      `https://quantillium.softigital.com/api/payment/create-payment-link `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: amount
          ? JSON.stringify({
              callsAmount,
              callsId,
              callsType,
              currency,
              description,
              userId,
              amount,
            })
          : JSON.stringify({
              callsAmount,
              callsId,
              callsType,
              currency,
              description,
              userId,
            }),
      }
    );
    if (!response.ok) {
      throw new Error("An error occurred while trying to get API keys");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Some thing went Wrong" + error);
  }
};
