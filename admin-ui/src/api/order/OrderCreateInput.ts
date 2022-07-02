import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type OrderCreateInput = {
  client?: ClientWhereUniqueInput | null;
  discount?: number | null;
  service?: ServiceWhereUniqueInput | null;
  serviceFee?: number | null;
  totalPrice?: number | null;
};
