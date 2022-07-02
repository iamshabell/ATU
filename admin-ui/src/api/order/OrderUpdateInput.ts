import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type OrderUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  discount?: number | null;
  service?: ServiceWhereUniqueInput | null;
  serviceFee?: number | null;
  totalPrice?: number | null;
};
