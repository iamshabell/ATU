import { Client } from "../client/Client";
import { Service } from "../service/Service";

export type Order = {
  client?: Client | null;
  createdAt: Date;
  discount: number | null;
  id: string;
  service?: Service | null;
  serviceFee: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
