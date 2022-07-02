import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type OrderWhereInput = {
  client?: ClientWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  service?: ServiceWhereUniqueInput;
  serviceFee?: FloatNullableFilter;
  totalPrice?: FloatNullableFilter;
};
