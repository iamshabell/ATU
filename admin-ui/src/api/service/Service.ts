import { Celebrity } from "../celebrity/Celebrity";
import { Order } from "../order/Order";

export type Service = {
  celebrity?: Celebrity | null;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  price: number | null;
  serviceName: string | null;
  updatedAt: Date;
};
