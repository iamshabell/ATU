import { CelebrityWhereUniqueInput } from "../celebrity/CelebrityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ServiceWhereInput = {
  celebrity?: CelebrityWhereUniqueInput;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  serviceName?: StringNullableFilter;
};
