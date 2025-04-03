export type LoginResponse = {
    status: 'SUCCESS' | 'USER_NOT_FOUND' | 'INCORRECT_PASSWORD'; 
    result: User;
  }
  export interface User {
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
  }