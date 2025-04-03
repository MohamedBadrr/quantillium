type getUserDataProps = {
  user_id: string;
};
export interface getUserDataResponse {
  status: "SUCCESS" | string;
  result: {
    user_id: {
      id: string;
      email: string;
      full_name: string;
      company: string;
      phone_number: string;
      NOTIFICATIONS_ACCOUNT_ACCOUNT_CHANGES: boolean;
      NOTIFICATIONS_ACCOUNT_SECURITY_ALERTS: boolean;
      NOTIFICATIONS_ACCOUNT_SUBSCRIPTION_CHANGES: boolean;
      NOTIFICATIONS_MARKETING_SPECIAL_OFFERS: boolean;
      NOTIFICATIONS_MARKETING_NEWSLETTER: boolean;
      NOTIFICATIONS_MARKETING_EVENT_INVITATIONS: boolean;
      NOTIFICATIONS_BILLING_UPCOMING_PAYMENTS: boolean;
      NOTIFICATIONS_BILLING_PAYMENT_FAILURES: boolean;
      NOTIFICATIONS_BILLING_PAYMENT_CONFIRMATIONS: boolean;
    };
  };
}
export const getUserData = async ({
  user_id,
}: getUserDataProps): Promise<getUserDataResponse> => {
  try {
    const response = await fetch(`/api/get_user_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    });
    if (!response.ok) {
      throw new Error("An error occurred while trying to get API keys");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Some thing went Wrong" + error);
  }
};
