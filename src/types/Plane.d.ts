export type SENDPLANE = {
  amount?: number; //in cent
  description: string;
  currency: string;
  userId: string;
  callsType: "PLAN" | "DEMAND-ON" | string;
  callsId: number;
  callsAmount: number;
};
